import React from "react";
import { Paragraphmd } from "@/components/typography/Heading";
import headerNavLinks from "@/data/header-nav-links";
import NavLink from "../navbar/NavLink";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";

const Footer: React.FC = () => {
 return (
  <div className='pb-1 pt-2'>
   <footer className='backgroundOverlay md:px-20 md:py-16 py-12 px-5 flex  md:gap-5 gap-2  justify-between'>
    <div className='flex justify-between flex-col'>
     <div>
      <NavLink href='/'>TrackingAcamdey</NavLink>
      <Paragraphmd className='textOpacity80 py-2'>
       The ultimate educational journey for freelancers.
      </Paragraphmd>
     </div>
     <Paragraphmd className='textOpacity80'>
      © {new Date().getFullYear()} TrackingAcademy, All rights reserved
     </Paragraphmd>
    </div>
    <nav className='flex flex-col space-y-3 min-w-fit textOpacity80'>
     {headerNavLinks.map(({ href, title }) => (
      <NavLink key={`nav-link-${title}`} href={href}>
       {title}
      </NavLink>
     ))}
     <ThemeSwitcher />
    </nav>
   </footer>
  </div>
 );
};

export default Footer;
