import { forwardRef } from "react";
import { Marquee } from "@/components";
import { useDeviceTypeContext } from "@/context/DeviceTypeContext";
import { PageProps, PageRef } from "@/types/component";

const Landing = forwardRef(({ }: PageProps, ref: PageRef) => {
  const marqueeConfig: {
    [index: string]: number
  } = {
    "phone": 15,
    "tablet": 30,
    "desktop": 30
  }
  const deviceType = useDeviceTypeContext();

  return (
    <section
      ref={ref}
      id="landing-page"
      className="w-full h-screen bg-black text-white content-center relative snap-start"
    >
      <Marquee
        items={["Trần Hoàng Minh Khoa"]}
        separator={" - "}
        duration={marqueeConfig[deviceType.type]}
        marqueeTextStyle="*:mx-8 mb-20 md:mb-0 text-6xl/normal md:text-9xl/normal"
      />
    </section>
  );
});
export default Landing;
