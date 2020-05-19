import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hnAPI";
import { Story } from "./Story";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => {
      setStoryIds(data);
    });
  }, []);

  return (
    <React.Fragment>
      <h1>Hacker News Digest</h1>
      {storyIds.slice(0,6).map(item => {
        return <Story key={item} storyID={item} />
      })}
    </React.Fragment>
  );
};
