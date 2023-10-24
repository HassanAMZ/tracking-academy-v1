import React from "react";
import {
 Heading3xl,
 Heading2xl,
 Headingxl,
 Paragraphsm,
 Paragraphxs,
} from "@/components/typography/Heading";
import Link from "next/link";
import generateBrightColor from "@/components/utils/generateBrightColor";
import formatDate from "@/components/seo/formatDate";
import { SingleBlogCardProps } from "@/types/index";
const BlogCard: React.FC<SingleBlogCardProps> = ({
 post,
 type,
 isMain = false,
 className = "",
}) => {
 const renderContent = () => (
  <>
   {isMain ? (
    <div
     className={`backgroundOverlay !bg-blue-500 text-white dark:text-gray-800 p-6`}>
     <Heading2xl className='line-clamp-2 py-2 '>{post.title}</Heading2xl>
    </div>
   ) : (
    <div
     className={`backgroundOverlay p-6 `}
     style={{ backgroundColor: generateBrightColor(0.05) }}>
     <Headingxl className='line-clamp-2 '>{post.title}</Headingxl>
    </div>
   )}

   <div className='textOpacity80 py-6 px-6 border-md'>
    <Paragraphsm className='line-clamp-3'>{post.description}</Paragraphsm>
    <Paragraphxs className='md:pt-6 pt-4 pb-2 flex justify-between'>
     <span> {formatDate(post.date)} - ShahzadaAliHassan</span>
    </Paragraphxs>
   </div>
  </>
 );
 return (
  <React.Fragment>
   <div
    className={` hover:border-2 hover:dark:border-white hover:border-gray-800 rounded-md border-2 dark:border-gray-800 border-white shadow-md  ${
     isMain ? "hidden md:flex" : ""
    } ${className}`}>
    <Link href={`/${type}/${post.slug}`} className=''>
     <section className='grid backgroundOverlay h-full w-full'>
      {renderContent()}
     </section>
    </Link>
   </div>
  </React.Fragment>
 );
};

export default BlogCard;
