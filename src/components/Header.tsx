import { FC } from "react";
import Icons from "../assets/icons";

const Header: FC = () => {
  return (
    <header className="w-full h-20 bg-black text-white uppercase z-50 fixed top-0">
      <nav className="h-full flex justify-between items-center mx-4">
        <div className="w-40">
          <a href="">
            <Icons.Logo />
          </a>
        </div>
        <div className="quote grow-0">
          <div className="">passionate</div>
          <div className="">resolve</div>
          <div className="">inspired</div>
        </div>
        <div className="w-40 text-right">
          <a href="">&gt; Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
