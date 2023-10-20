import React from "react";
import {
 Heading3xl,
 Heading2xl,
 Paragraphsm,
} from "@/components/typography/Heading";
import Link from "next/link";
import generateDarkColor from "@/components/utils/generateDarkColor";
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
   <div className={`backgroundOverlay p-6`}>
    {isMain ? (
     <Heading3xl className='line-clamp-2 py-2'>{post.title}</Heading3xl>
    ) : (
     <Heading2xl className='line-clamp-2 '>{post.title}</Heading2xl>
    )}
   </div>

   <div className='textOpacity80 py-6 px-6 border-md'>
    <Paragraphsm className='line-clamp-4'>{post.description}</Paragraphsm>
    <Paragraphsm className='md:pt-6 pt-4 pb-2 flex justify-between'>
     <span> {formatDate(post.date)} - ShahzadaAliHassan</span>
    </Paragraphsm>
   </div>
  </>
 );
 return (
  <React.Fragment>
   {post.draft ? (
    <React.Fragment />
   ) : (
    <div
     className={` hover:border-2 hover:border-white rounded-md border-2 border-gray-700 shadow-md  ${
      isMain ? "hidden md:flex" : ""
     } ${className}`}>
     <Link href={`/${type}/${post.slug}`} className=''>
      <section className='grid backgroundOverlay h-full w-full'>
       {renderContent()}
      </section>
     </Link>
    </div>
   )}
  </React.Fragment>
 );
};

export default BlogCard;
