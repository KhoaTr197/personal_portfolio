import { forwardRef, ReactNode, useEffect, useState } from "react";
import { Marquee } from "@/components";
import Icons from "@/assets/icons";
import { PageProps, PageRef } from "@/types/component";

interface ContactInfo {
  telphone: string;
  email: string;
  copyright: string;
}

interface SocialLink {
  key: string;
  icon: string;
  url: string;
}

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
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [socialLinks, setSocialLinks] = useState<SocialLink[] | null>(null);

  useEffect(() => {
    fetch("public/content/contact_info.json")
      .then(res => res.json())
      .then(data => setContactInfo(data));

    fetch("public/content/social_links.json")
      .then(res => res.json())
      .then(data => setSocialLinks(data));
  }, []);

  return (
    <section ref={ref} id="contact-page" className="w-full h-screen relative snap-start">
      <div className="h-full pt-16 md:pt-40">
        <div className="h-full flex flex-col bg-black">
          <Marquee
            items={["-", "Contact", "-", "Contact", "-", "Contact"]}
            marqueeBarStyle="bg-[#FFE]"
            marqueeTextStyle="*:mx-8 text-6xl md:text-9xl text-black leading-tight"
          />
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
            items={[
              "-//-", "You reach the end of the website",
              "-//-", "You reach the end of the website",
              "-//-", "You reach the end of the website",
            ]}
            marqueeBarStyle="bg-[#FFE]"
            marqueeTextStyle="*:mx-2 text-2xl md:text-4xl text-black leading-tight uppercase"
          />
        </div>
      </div>
    </section>
  );
});
export default Contact;
