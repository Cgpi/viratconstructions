const API_BASE_URL = "https://www.cgpisoftware.com/vpconstruction/api";

/**
 * Fetch images for a given service location.
 *
 * @param {string} location - Name of the location, e.g. "Rowhouse"
 * @param {number} userId - Defaults to 7
 * @returns {Promise<Array<{id: number, title: string, image_url: string}>>}
 */
export async function fetchServiceImagesByLocation(location, userId = 7) {
  if (!location) return [];

  const baseEndpoint = `${API_BASE_URL}/images?user_id=${userId}`;

  try {
    // 1. Primary request using location query param as requested (e.g. location=Rowhouse)
    const primaryUrl = `${baseEndpoint}&location=${encodeURIComponent(location)}`;
    const res = await fetch(primaryUrl);

    if (res.ok) {
      const data = await res.json();
      const list = Array.isArray(data) ? data : data?.image_url ? [data] : [];
      if (list.length > 0) {
        const validImages = list.filter((item) => item?.image_url);
        if (validImages.length > 0) {
          return validImages;
        }
      }
    }
  } catch (err) {
    console.warn(`[Service API] Failed to fetch images for location "${location}":`, err);
  }

  // 2. Fallback check: if the location is Rowhouse, also check backend slug "RowHouseServiceThumbnail" or location_id
  const normalizedLoc = location.trim().toLowerCase();
  if (normalizedLoc === "rowhouse" || normalizedLoc === "row houses" || normalizedLoc === "row-houses") {
    try {
      const slugUrl = `${baseEndpoint}&location=RowHouseServiceThumbnail`;
      const fallbackRes = await fetch(slugUrl);

      if (fallbackRes.ok) {
        const fallbackData = await fallbackRes.json();
        if (Array.isArray(fallbackData) && fallbackData.length > 0) {
          const valid = fallbackData.filter((item) => item?.image_url);
          if (valid.length > 0) {
            return valid;
          }
        }
      }
    } catch {
      // Ignore fallback network error
    }

    try {
      const idUrl = `${baseEndpoint}&location_id=38`;
      const idRes = await fetch(idUrl);

      if (idRes.ok) {
        const idData = await idRes.json();
        const idList = Array.isArray(idData) ? idData : idData?.image_url ? [idData] : [];
        if (idList.length > 0) {
          const valid = idList.filter((item) => item?.image_url);
          if (valid.length > 0) {
            return valid;
          }
        }
      }
    } catch {
      // Ignore fallback network error
    }
  }

  // 3. Fallback check for Layout Planning location
  if (normalizedLoc === "layoutplaningthumbnail" || normalizedLoc === "layoutplanning" || normalizedLoc === "layout") {
    try {
      const idUrl = `${baseEndpoint}&location_id=39`;
      const idRes = await fetch(idUrl);
      if (idRes.ok) {
        const idData = await idRes.json();
        const idList = Array.isArray(idData) ? idData : idData?.image_url ? [idData] : [];
        if (idList.length > 0) {
          const valid = idList.filter((item) => item?.image_url);
          if (valid.length > 0) {
            return valid;
          }
        }
      }
    } catch {
      // Ignore fallback network error
    }
  }

  // 4. Fallback check for Industrial Project location
  if (normalizedLoc === "industrialprojectthumbnail" || normalizedLoc === "industrialproject" || normalizedLoc === "industrial") {
    try {
      const idUrl = `${baseEndpoint}&location_id=40`;
      const idRes = await fetch(idUrl);
      if (idRes.ok) {
        const idData = await idRes.json();
        const idList = Array.isArray(idData) ? idData : idData?.image_url ? [idData] : [];
        if (idList.length > 0) {
          const valid = idList.filter((item) => item?.image_url);
          if (valid.length > 0) {
            return valid;
          }
        }
      }
    } catch {
      // Ignore fallback network error
    }
  }

  // 5. Fallback check for VDF Flooring location
  if (normalizedLoc === "vdfflooringthumbnail" || normalizedLoc === "vdfflooring" || normalizedLoc === "vdf") {
    try {
      const idUrl = `${baseEndpoint}&location_id=41`;
      const idRes = await fetch(idUrl);
      if (idRes.ok) {
        const idData = await idRes.json();
        const idList = Array.isArray(idData) ? idData : idData?.image_url ? [idData] : [];
        if (idList.length > 0) {
          const valid = idList.filter((item) => item?.image_url);
          if (valid.length > 0) {
            return valid;
          }
        }
      }
    } catch {
      // Ignore fallback network error
    }
  }

  return [];
}

