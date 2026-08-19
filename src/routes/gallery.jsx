import { PageHero } from "../components/page-hero";
import { Skeleton } from "../components/ui/skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import { useEffect, useMemo, useState } from "react";
import { Dialog, DialogContent } from "../components/ui/dialog";

const GALLERY_API_URL =
  "https://www.cgpisoftware.com/vpconstruction/api/images?user_id=7&location=gallery";
const PAGE_SIZE = 21;

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadGallery() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(GALLERY_API_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Gallery request failed (${response.status})`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Unexpected gallery response format");
        }

        const normalized = data
          .filter((item) => item?.image_url)
          .map((item) => ({
            id: item.id,
            title: item.title ?? "Gallery image",
            image_url: item.image_url,
            sort_order: item.sort_order ?? 0,
          }))
          .sort((a, b) => a.sort_order - b.sort_order);

        setImages(normalized);
      } catch (err) {
        if (err?.name !== "AbortError") {
          setError(err?.message ?? "Unable to load gallery images.");
        }
      } finally {
        setLoading(false);
      }
    }

    loadGallery();

    return () => controller.abort();
  }, []);

  const totalPages = Math.max(1, Math.ceil(images.length / PAGE_SIZE));

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const currentImages = useMemo(
    () => images.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [images, page],
  );

  const paginationPages = useMemo(() => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const pages = [1];
    const start = Math.max(2, page - 2);
    const end = Math.min(totalPages - 1, page + 2);

    if (start > 2) {
      pages.push(-1);
    }

    for (let i = start; i <= end; i += 1) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push(-1);
    }

    pages.push(totalPages);
    return pages;
  }, [page, totalPages]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The portfolio in pictures."
        subtitle="A curated look at the homes, interiors, and spaces that pass our threshold."
      />

      <section className="section-pad">
        <div className="container-px mx-auto max-w-7xl">
          {loading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 9 }).map((_, index) => (
                <Skeleton key={index} className="aspect-[4/3] rounded-3xl" />
              ))}
            </div>
          ) : error ? (
            <div className="rounded-3xl border border-destructive/20 bg-destructive/10 p-8 text-center text-sm text-destructive">
              <p className="font-medium">Unable to load gallery images.</p>
              <p className="mt-2 text-xs text-destructive/80">{error}</p>
            </div>
          ) : currentImages.length === 0 ? (
            <div className="rounded-3xl border border-border/70 bg-muted p-8 text-center text-sm text-foreground/80">
              No gallery images are available right now. Please check back later.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {currentImages.map((image) => (
                <figure
                  key={image.id}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelected(image);
                    }
                  }}
                  onClick={() => setSelected(image)}
                  className="flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl bg-slate-100 shadow-[var(--shadow-card)]"
                >
                  <div className="relative overflow-hidden bg-slate-100 aspect-[4/3]">
                    <img
                      src={image.image_url}
                      alt={image.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                      width={1200}
                      height={900}
                    />
                  </div>
                  <figcaption className="mt-auto border-t border-border/70 px-4 py-3 text-sm font-medium text-slate-700 h-14">
                    {image.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
            <DialogContent className="p-0 bg-transparent max-w-5xl w-full">
              {selected && (
                <div className="mx-auto w-full">
                  <img
                    src={selected.image_url}
                    alt={selected.title}
                    className="mx-auto block max-h-[80vh] w-auto object-contain"
                  />
                  <div className="px-4 py-3 text-center text-sm text-slate-200">{selected.title}</div>
                </div>
              )}
            </DialogContent>
          </Dialog>

          {!loading && !error && totalPages > 1 && (
            <Pagination className="mt-10">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      setPage((current) => Math.max(1, current - 1));
                    }}
                    className={page === 1 ? "opacity-60 pointer-events-none" : ""}
                  />
                </PaginationItem>

                {paginationPages.map((pageNumber, index) =>
                  pageNumber === -1 ? (
                    <PaginationItem key={`ellipsis-${index}`}>
                      <span className="flex h-9 w-9 items-center justify-center text-muted-foreground">…</span>
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        href="#"
                        isActive={pageNumber === page}
                        onClick={(event) => {
                          event.preventDefault();
                          setPage(pageNumber);
                        }}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  ),
                )}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                        onClick={(event) => {
                      event.preventDefault();
                      setPage((current) => Math.min(totalPages, current + 1));
                    }}
                    className={page === totalPages ? "opacity-60 pointer-events-none" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </section>
    </>
  );
}
