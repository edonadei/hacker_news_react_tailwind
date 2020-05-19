import React, { useState, useEffect } from "react";
import { getStory } from "../services/hnAPI";
import { mapTime } from "../mappers/mapTime";
import logo_svg from 'assets/undraw_newspaper_k72w.svg'

export const Story = ({ storyID }) => {
  const [story, setStory] = useState({});
  useEffect(() => {
    getStory(storyID).then(data => data && data.url && setStory(data));
  }, []);
  return story && story.url
    ? <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="sm:flex sm:items-center px-6 py-4">
          <img
            class="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
            src={logo_svg}
            alt="Woman's Face"
          />
          <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <p class="text-xl leading-tight">
              {story.title}
            </p>
            <p class="text-sm leading-tight text-gray-600">
              by {story.by}
            </p>
            <p class="text-sm leading-tight text-gray-600">
              {mapTime(story.time)} ago
            </p>
            <p class="text-sm leading-tight text-gray-600">
              {story.url}
            </p>
          </div>
        </div>
      </div>
    : null;
};
