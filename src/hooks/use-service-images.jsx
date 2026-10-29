import { useState, useEffect } from "react";
import { fetchServiceImagesByLocation } from "@/lib/service-api";

/**
 * Hook to dynamically load images for any service cards that specify an `apiLocation`.
 * Cards without `apiLocation` preserve their static images.
 *
 * @param {Array} services - Array of service objects from servicesData
 * @returns {Array} Services with any fetched API images applied
 */
export function useServicesWithApiImages(services) {
  const [serviceList, setServiceList] = useState(services);

  useEffect(() => {
    let isMounted = true;

    async function loadImages() {
      // Find services that have apiLocation configured
      const servicesToFetch = services.filter((s) => Boolean(s.apiLocation));

      if (servicesToFetch.length === 0) return;

      const results = await Promise.all(
        servicesToFetch.map(async (s) => {
          const images = await fetchServiceImagesByLocation(s.apiLocation);
          return { id: s.id, images };
        })
      );

      if (!isMounted) return;

      const imageMap = new Map();
      results.forEach(({ id, images }) => {
        if (images && images.length > 0) {
          imageMap.set(id, images);
        }
      });

      if (imageMap.size > 0) {
        setServiceList((prevList) =>
          prevList.map((service) => {
            const apiImages = imageMap.get(service.id);
            if (apiImages && apiImages.length > 0) {
              const mainUrl = apiImages[0].image_url;
              const allUrls = apiImages.map((item) => item.image_url);

              return {
                ...service,
                image: mainUrl,
                gallery: allUrls.length > 1 ? allUrls : [mainUrl, ...(service.gallery || []).slice(1)],
              };
            }
            return service;
          })
        );
      }
    }

    loadImages();

    return () => {
      isMounted = false;
    };
  }, [services]);

  return serviceList;
}

/**
 * Hook to dynamically load API images for a single service (e.g. on its detail page).
 *
 * @param {Object} service - Service object
 * @returns {Object} Updated service with API images if available
 */
export function useSingleServiceWithApiImages(service) {
  const [currentService, setCurrentService] = useState(service);

  useEffect(() => {
    if (!service?.apiLocation) {
      setCurrentService(service);
      return;
    }

    let isMounted = true;

    fetchServiceImagesByLocation(service.apiLocation).then((images) => {
      if (isMounted && images && images.length > 0) {
        const mainUrl = images[0].image_url;
        const allUrls = images.map((item) => item.image_url);

        setCurrentService({
          ...service,
          image: mainUrl,
          gallery: allUrls.length > 1 ? allUrls : [mainUrl, ...(service.gallery || []).slice(1)],
        });
      }
    });

    return () => {
      isMounted = false;
    };
  }, [service]);

  return currentService;
}

