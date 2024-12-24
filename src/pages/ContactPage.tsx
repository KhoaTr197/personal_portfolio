import { forwardRef, ReactNode, Ref } from "react";
import { Marquee } from "../components";
import Icons from "../assets/icons";

type ContactProps = {
  children?: ReactNode;
}
type ContactRef = Ref<HTMLElement>

const socialLinks = [
  {
    key: 'Facebook',
    icon: <Icons.Facebook size={96} />,
    url: 'https://www.facebook.com/khoa.tr.113849'
  },
  {
    key: 'Instagram',
    icon: <Icons.Instagram size={96} />,
    url: 'https://www.instagram.com/khoa.tr_n/' 
  },
  {
    key: 'X',
    icon: <Icons.X size={96} />,
    url: 'https://x.com/KhoaTr197' 
  },
  {
    key: 'Linkedin',
    icon: <Icons.Linkedin size={96} />,
    url: 'https://linkedin.com/in/khoatr197' 
  },
  {
    key: 'Reddit',
    icon: <Icons.Reddit size={96} />,
    url: 'https://www.reddit.com/user/KhoaTr_197/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button' 
  },
  {
    key: 'Discord',
    icon: <Icons.Discord size={96} />,
    url: 'http://discordapp.com/users/685889637784617138' 
  },
  {
    key: 'GitHub',
    icon: <Icons.GitHub size={96} />,
    url: 'https://github.com/KhoaTr197' 
  }
]

const Contact = forwardRef(({}: ContactProps, ref: ContactRef) => {
  return (
    <section ref={ref} id="contact-page" className="w-full h-screen relative snap-start">
      <div className="h-full pt-40">
        <div className="h-full flex flex-col bg-black">
          <Marquee
            items={["-", "Contact", "-", "Contact", "-", "Contact"]}
            marqueeBarStyle="bg-[#FFE]"
            marqueeTextStyle="*:mx-8 text-9xl text-black leading-tight"
          />
          <footer className="flex-grow flex">
            <div className="w-2/6 px-4 pt-8">
              <div className="text-4xl uppercase">contact info</div>
              <ul className="flex flex-col mt-8 gap-14">
                <li className="text-2xl inline-flex">
                  <Icons.Phone size={32} style="mr-2"/> +84 332 761 252
                </li>
                <li className="text-2xl inline-flex">
                  <Icons.Mail size={32} style="mr-2"/> darkreaper197@gmail.com
                </li>
                <li className="font-extralight uppercase">
                  &copy; KhoaTr. 2024 All Rights Reserved
                </li>
              </ul>
            </div>
            <div className="w-4/6 px-4 pt-8">
              <div className="text-4xl uppercase">social media</div>
              <ul className="mt-8 flex flex-wrap gap-12">
                {socialLinks.map(link => {
                  return (
                    <li key={link.key}>
                      <a className='block hover:scale-95 hover:brightness-75 transition-transform duration-100' href={link.url} target="_blank">{link.icon}</a>
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
            marqueeTextStyle="*:mx-2 text-4xl text-black uppercase"
          />
        </div>
      </div>
    </section>
  );
});
export default Contact;
