import Typewriter from "@/components/Typewriter";
import Icons from "@/assets/icons";
import { HeaderProps } from "@/types/component";

const Header = ({
  onClick
}: HeaderProps) => {
  return (
    <header className="w-full h-16 md:h-20 bg-black text-white uppercase z-50 fixed top-0">
      <nav className="h-full flex justify-between items-center mx-4">
        <div className="w-20 md:w-40">
          <a href="">
            <Icons.Logo style="w-full" />
          </a>
        </div>
        <div className="quote grow-0 text-sm md:text-base">
          <Typewriter text="passionate" />
          <Typewriter text="resolve" delay={80} />
          <Typewriter text="inspired" delay={80} />
        </div>
        <div className="w-fit md:w-40 text-right">
          <p className="w-fit ml-auto cursor-pointer text-sm md:text-base hover-effect" onClick={onClick}>
            <span className='inline-block mr-1 animate-cta'>&gt;</span>
            Contact
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
