import { forwardRef, ReactNode, Ref, useContext } from "react";
import { Marquee } from "../components";
import DeviceTypeContext from "../context/DeviceTypeContext";

type LandingProps = {
  children?: ReactNode;
};
type LandingRef = Ref<HTMLElement>;

const Landing = forwardRef(({}: LandingProps, ref: LandingRef) => {
  const marqueeConfig: {
    [index: string]: number
  } = {
    "phone": 15,
    "tablet": 30,
    "desktop": 50
  }
  const deviceType = useContext(DeviceTypeContext);

  return (
    <section
      ref={ref}
      id="landing-page"
      className="w-full h-screen bg-black text-white content-center relative snap-start"
    >
      <Marquee
        items={["-", "Trần Hoàng Minh Khoa", "-", "Trần Hoàng Minh Khoa"]}
        duration={marqueeConfig[deviceType]}
        marqueeTextStyle="*:mx-8 mb-20 md:mb-0 text-9xl leading-tight"
      />
    </section>
  );
});
export default Landing;
