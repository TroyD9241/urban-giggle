import { useState } from "react";
import { Gallery } from "../components/Gallery/Gallery";
import { TopicsCarousel } from "../components/TopicsCarousel.js/TopicsCarousel";

export const Homepage = () => {
  const [galleryPosts, setGalleryPosts] = useState([]);
  const [topics, setTopics] = useState([]);
  const [popular, setPopular] = useState([]);

  return (
    <div>
      <h1>Gallery</h1>
      <Gallery posts={galleryPosts} />
      <br />

      <h1>Topics</h1>
      <div className=" container w-max">
        {" "}
        <TopicsCarousel />
      </div>
      <br />

      <h1>Popular posts</h1>

      <br />
    </div>
  );
};
