"use client";

import React, { useState, useEffect } from "react";
import { PostMetadata } from "@/types/index";
import { BlogSearchProps } from "@/types/index";

const BlogSearch: React.FC<BlogSearchProps> = ({ data, onSearch }) => {
 const [searchTerm, setSearchTerm] = useState("");

 useEffect(() => {
  const lowerCasedSearchTerm = searchTerm.toLowerCase();

  const results = data.filter((post) => {
   // Check if title contains the search term
   const titleContains = post.title
    .toLowerCase()
    .includes(lowerCasedSearchTerm);

   // Check if description contains the search term
   const descriptionContains = post.description
    .toLowerCase()
    .includes(lowerCasedSearchTerm);

   // Check if any of the tags contain the search term
   const tagsContain = post.tags.some((tag) =>
    tag.toLowerCase().includes(lowerCasedSearchTerm)
   );

   return titleContains || descriptionContains || tagsContain;
  });

  onSearch(results);
 }, [searchTerm]); // only react to searchTerm changes

 console.log(data[0]);
 return (
  <div className='flex flex-col gap-2'>
   <input
    type='text'
    placeholder='Search for a post...'
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className='p-2 border-2 border-gray-800 dark:border-white rounded-md mb-2 text-gray-800 bg-transparent'
   />
  </div>
 );
};

export default BlogSearch;
