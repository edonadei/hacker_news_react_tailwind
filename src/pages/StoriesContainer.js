import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hnAPI";
import { Story } from "./Story";
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const { count } = useInfiniteScroll();

  useEffect(() => {
    getStoryIds().then(data => {
      setStoryIds(data);
    });
  }, []);

  return (
    <React.Fragment>
      <div class=" text-center flex-wrap mt-5 mb-5">
        <h1 class="text-purple-500 text-4xl">Hacker News Digest</h1>
      </div>
      {storyIds.slice(0, count).map(item => {
        return <Story key={item} storyID={item} />;
      })}
    </React.Fragment>
  );
};
