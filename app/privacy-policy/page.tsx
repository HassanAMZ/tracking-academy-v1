import Link from "next/link";
import React from "react";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import {
 Heading4xl,
 Heading3xl,
 Paragraphmd,
} from "@/components/typography/Heading";

const Page = () => {
 return (
  <ContainerLayout className='privacy-policy-container space-y-4'>
   <header className='privacy-header'>
    <Heading4xl>Privacy Policy</Heading4xl>
   </header>

   <section className='privacy-section'>
    <Heading3xl>Introduction</Heading3xl>
    <Paragraphmd>
     At TrackingAcademy.com, your privacy is our priority. This privacy policy
     document describes the types of information collected by
     TrackingAcademy.com and how we use it.
    </Paragraphmd>
   </section>

   <section className='privacy-section'>
    <Heading3xl>Information Collection and Use</Heading3xl>
    <Paragraphmd>
     We may collect personal information including, but not limited to, your
     name and email address when you subscribe to our newsletter or leave
     comments on our blog. We use this information to improve our content and
     provide a better user experience.
    </Paragraphmd>
   </section>

   <section className='privacy-section'>
    <Heading3xl>Cookies and Web Beacons</Heading3xl>
    <Paragraphmd>
     TrackingAcademy.com uses cookies to store information regarding visitor
     preferences, and to customize web page content based on visitors’ browser
     type or other information sent via their browser.
    </Paragraphmd>
   </section>

   <section className='privacy-section'>
    <Heading3xl>Analytics</Heading3xl>
    <Paragraphmd>
     We utilize Google Tag Manager, Google Analytics 4, and other tracking tools
     to monitor and analyze web traffic, and to understand where our visitors
     are coming from. This helps us enhance our services and your experience.
    </Paragraphmd>
   </section>

   <section className='privacy-section'>
    <Heading3xl>Consent</Heading3xl>
    <Paragraphmd>
     By using our website, you hereby consent to our privacy policy and agree to
     its terms.
    </Paragraphmd>
   </section>

   <section className='privacy-section'>
    <Heading3xl>Changes to This Privacy Policy</Heading3xl>
    <Paragraphmd>
     We may update our Privacy Policy from time to time. Thus, we advise you to
     review this page periodically for any changes.
    </Paragraphmd>
   </section>

   <section className='privacy-section'>
    <Heading3xl>Contact Us</Heading3xl>
    <Paragraphmd>
     If you have any questions or suggestions about our Privacy Policy, do not
     hesitate to
     <Link href='/contact'>contact us</Link>
    </Paragraphmd>
   </section>
  </ContainerLayout>
 );
};

export default Page;
