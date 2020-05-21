import React, { useState, useEffect } from "react";
import { getStory } from "../services/hnAPI";
import { mapTime } from "../mappers/mapTime";
import logo_svg from "assets/undraw_newspaper_k72w.svg";

export const Story = ({ storyID }) => {
  const [story, setStory] = useState({});
  useEffect(() => {
    getStory(storyID).then(data => data && data.url && setStory(data));
  }, []);
  return story && story.url
    ? <div class="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        <div class="sm:flex sm:items-center px-6 py-4">
          <img
            class="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
            src={logo_svg}
            alt="News"
          />
          <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <p class="text-xl leading-tight">
              {story.title}
            </p>
            <p class="text-sm leading-tight text-gray-600">
              {mapTime(story.time)} ago
            </p>
            <div class="mt-3">
              <a href={story.url} class="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Article
              </a>
              <button class="bg-blue-700 ml-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                {story.descendants} Comments
              </button>
            </div>
          </div>
        </div>
      </div>
    : null;
};
