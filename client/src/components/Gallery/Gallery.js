import { GalleryCard } from "./GalleryCard";

export const Gallery = ({ posts }) => {
  const photos = posts || [];

  return (
    <>
      <div class="overflow-hidden text-gray-700 ">
        <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <GalleryCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
