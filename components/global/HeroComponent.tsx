import Image from "next/image";
import React from "react";
import {
 Heading2xl,
 Heading3xl,
 Heading5xl,
} from "@/components/typography/Heading";
import Link from "next/link";
import lightenDarkenColor from "@/components/utils/lightenDarkenColor";
import LearnMoreHeader from "@/components/global/LearnMoreHeader";
import ContainerLayout from "@/layouts/ContainerLayout";
import { HeroProps } from "@/types/index";

const HeroComponent: React.FC<HeroProps> = ({
 textGroup,
 links,
 images,
 colorDetails,
}) => {
 // Validations and color calculations
 const color = lightenDarkenColor(
  colorDetails.primary,
  colorDetails?.light.value || 10,
  colorDetails?.dark.value || 90,
  colorDetails?.light.opacity || 1,
  colorDetails?.dark.opacity || 0.5
 );

 return (
  <ContainerLayout>
   <section className='relative rounded-md flex flex-col  items-center justify-center'>
    {images.background && (
     <div
      className='rounded-md absolute  top-0 bottom-0 left-0 opacity-50 right-0 bg-cover z-0'
      style={{
       backgroundColor: `${color.darker}`,
       backgroundPosition: "65% 10%",
       backgroundImage: `url('${images.background}')`,
      }}></div>
    )}
    <div className='relative text-white z-10 flex flex-col justify-center items-start px-4 py-20 sm:px-8 md:px-14 '>
     <aside className='space-y-5 pb-6'>
      {images.group?.list && (
       <div className='flex flex-wrap items-center justify-start opacity-70'>
        {images.group.list.map((image, index) => (
         <Image
          src={image.src}
          alt={image.alt}
          width={1920}
          key={index}
          height={1080}
          className='rounded-full w-10 h-10'
         />
        ))}
       </div>
      )}
      {textGroup.welcomeText && (
       <Heading3xl
        className='text-xl font-semibold w-[70%] md:max-w-md lg:max-w-lg'
        style={{ color: color.lighter }}>
        {textGroup.welcomeText}
       </Heading3xl>
      )}
      {textGroup.heading && (
       <Heading5xl className='md:max-w-lg'>{textGroup.heading}</Heading5xl>
      )}
      {textGroup.subHeading && (
       <div className='space-y-1 font-semibold text-2xl md:w-[70%]'>
        <Heading2xl className='font-semibold tracking-normal leading-tight'>
         {textGroup.subHeading.one}
         <span className='textOpacity80'>{textGroup.subHeading.two}</span>
        </Heading2xl>
       </div>
      )}
     </aside>

     <div className='flex gap-2 text-lg'>
      <Link
       href={links.primary.src}
       className='font-semibold rounded-md py-4 px-6'
       style={{ backgroundColor: color.lighter }}>
       {links.primary.text}
      </Link>
      {links.secondary && (
       <Link
        href={links.secondary.src}
        className='font-medium border-2 hidden md:block rounded-md py-4 px-6'
        style={{ borderColor: color.lighter }}>
        {links.secondary.text}
       </Link>
      )}
     </div>
    </div>
   </section>
   {textGroup.learnMore && (
    <LearnMoreHeader
     headingTexts={{
      heading: textGroup.learnMore.heading,
      subHeading: textGroup.learnMore.subHeading,
     }}
     colorDetails={{ primary: colorDetails.primary }}
    />
   )}
  </ContainerLayout>
 );
};

export default HeroComponent;
