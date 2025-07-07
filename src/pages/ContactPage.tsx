import { forwardRef, ReactNode, useState } from "react";
import { Marquee } from "@/components";
import Icons from "@/assets/icons";
import { PageProps, PageRef } from "@/types/component";
import { ContactInfo, SocialLink } from "@/types/data";
import contactInfoData from "@/data/contactInfo";
import socialLinksData from "@/data/socialLinks";

const socialIconMap: Record<string, ReactNode> = {
  Facebook: <Icons.Facebook size={96} />,
  Instagram: <Icons.Instagram size={96} />,
  X: <Icons.X size={96} />,
  Linkedin: <Icons.Linkedin size={96} />,
  Reddit: <Icons.Reddit size={96} />,
  Discord: <Icons.Discord size={96} />,
  GitHub: <Icons.GitHub size={96} />,
};

const Contact = forwardRef(({ }: PageProps, ref: PageRef) => {
  const [contactInfo] = useState<ContactInfo | null>(contactInfoData);
  const [socialLinks] = useState<SocialLink[] | null>(socialLinksData);

  return (
    <section ref={ref} id="contact-page" className="w-full h-screen relative snap-start">
      <div className="h-full pt-16 md:pt-40">
        <div className="h-full flex flex-col bg-black">
          <Marquee
            duration={30}
            marqueeBarStyle="bg-[#FFE]"
          >
            <pre className="text-6xl md:text-9xl text-black leading-tight text-nowrap">- Contact </pre>
          </Marquee>
          <footer className="flex-grow flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/5 text-center lg:text-left xl:w-2/6 px-8 md:px-4 py-8">
              <div className="text-2xl sm:text-4xl uppercase">contact info</div>
              <ul className="flex flex-col mt-8 gap-6 lg:gap-14">
                <li className="md:text-xl lg:text-2xl inline-block">
                  <Icons.Phone size={32} style="mr-2 inline" />
                  {contactInfo?.telphone}
                </li>
                <li className="md:text-xl lg:text-2xl inline-block">
                  <Icons.Mail size={32} style="mr-2 inline" />
                  {contactInfo?.email}
                </li>
                <li className="font-extralight uppercase">
                  &copy; {contactInfo?.copyright}
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-3/5 xl:w-4/6 text-center lg:text-left px-8 md:x-4 md:py-8">
              <div className="text-2xl sm:text-4xl uppercase">social media</div>
              <ul className="lg:w-full mx-auto mt-8 flex flex-wrap justify-center lg:justify-normal gap-8 xl:gap-12">
                {socialLinks?.map((link: any) => {
                  const Icon = socialIconMap[link.icon];
                  return (
                    <li key={link.key}>
                      <a className='block *:size-12 md:*:size-16 lg:*:size-24 hover:scale-95 hover:brightness-75 transition-transform duration-100' href={link.url} target="_blank">{Icon}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </footer>
          <Marquee
            duration={30}
            marqueeBarStyle="bg-[#FFE]"
          >
            <pre className="text-2xl md:text-4xl text-black leading-tight uppercase text-nowrap">-//- You reach the end of the website </pre>
          </Marquee>
        </div>
      </div>
    </section>
  );
});
export default Contact;
