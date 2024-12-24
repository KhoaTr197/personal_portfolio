import { FC } from "react";
import { Typewriter } from "./index";
import Icons from "../assets/icons";

type HeaderProps = {
  onClick: () => void
}

const Header:FC<HeaderProps> = ({
  onClick
}) => {
  return (
    <header className="w-full h-20 bg-black text-white uppercase z-50 fixed top-0">
      <nav className="h-full flex justify-between items-center mx-4">
        <div className="w-40">
          <a href="">
            <Icons.Logo />
          </a>
        </div>
        <div className="quote grow-0">
          <Typewriter text="passionate" />
          <Typewriter text="resolve" delay={80}/>
          <Typewriter text="inspired" delay={80}/>
        </div>
        <div className="w-40 text-right">
          <p className="w-fit ml-auto cursor-pointer" onClick={onClick}>
            <span className='inline-block mr-1 animate-cta'>&gt;</span>
            Contact
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
