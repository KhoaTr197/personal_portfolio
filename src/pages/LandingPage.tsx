import { forwardRef, useState } from "react";
import { Marquee } from "@/components";
import { useDeviceTypeContext } from "@/context/DeviceTypeContext";
import { PageProps, PageRef } from "@/types/component";
import appConfig, { MarqueeConfig } from "@/config";

const Landing = forwardRef(({ }: PageProps, ref: PageRef) => {
  const deviceType = useDeviceTypeContext();
  const [config] = useState<MarqueeConfig>(appConfig[deviceType.type].marquee);

  return (
    <section
      ref={ref}
      id="landing-page"
      className="w-full h-screen bg-black text-white content-center relative snap-start"
    >
      <Marquee
        duration={config.duration}
        marqueeBarStyle="mb-20 md:mb-0"
      >
        <pre className="text-6xl/normal md:text-9xl/normal text-nowrap">- Trần Hoàng Minh Khoa </pre>
      </Marquee>
    </section>
  );
});
export default Landing;
