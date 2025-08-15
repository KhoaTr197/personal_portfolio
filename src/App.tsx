import { FC, useEffect, useState } from "react";
import { Header, CornerInfo, Typewriter } from "@/components";
import Pages from "@/pages";
import { useObserver } from "./hook/useObserver";
import { useDeviceTypeContext } from "@/context/DeviceTypeContext";
import { CornerInfoContent } from "@/types/data";
import cornerInfo from "@/data/cornerInfo"

const App: FC = () => {
  const [currentPage, setCurrentPage] = useState(Object.keys(cornerInfo)[0]);
  const [cornerInfoContent] = useState<{ [index: string]: CornerInfoContent } | null>(cornerInfo);
  const [observerConfig, setObserverConfig] = useState<{ root: HTMLElement | null; rootMargin: string }>({
    root: null,
    rootMargin: "-50%",
  });
  const deviceType = useDeviceTypeContext();

  const sectionRefs = useObserver(
    {
      Landing: null,
      Skillset: null,
      Showcase: null,
      Contact: null
    },
    (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        setCurrentPage(entry.target.id);
      }
    },
    observerConfig
  );

  useEffect(() => {
    setObserverConfig({
      root: document.getElementById("app"),
      rootMargin: "-50%",
    });
  }, []);

  const handleClick = () => {
    if (sectionRefs.current && "Contact" in sectionRefs.current) {
      sectionRefs.current["Contact"]?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="app"
      className="w-full h-screen overflow-hidden overflow-y-scroll snap-y snap-mandatory snap-always *:text-[#FFE] bg-gradient-cosmic"
    >
      <Header onClick={handleClick} />
      <Pages.Landing
        shouldPlayAnimation={currentPage === "landing-page"}
        ref={(el: HTMLElement | null) => {
          if (sectionRefs.current && "Landing" in sectionRefs.current)
            sectionRefs.current["Landing"] = el;
        }}
      />
      <Pages.Skillset
        shouldPlayAnimation={currentPage === "skillset-page"}
        ref={(el: HTMLElement | null) => {
          if (sectionRefs.current && "Skillset" in sectionRefs.current)
            sectionRefs.current["Skillset"] = el;
        }}
        deviceType={deviceType}
      />
      <Pages.Showcase
        shouldPlayAnimation={currentPage === "showcase-page"}
        ref={(el: HTMLElement | null) => {
          if (sectionRefs.current && "Showcase" in sectionRefs.current)
            sectionRefs.current["Showcase"] = el;
        }}
      />
      <Pages.Contact
        shouldPlayAnimation={currentPage === "contact-page"}
        ref={(el: HTMLElement | null) => {
          if (sectionRefs.current && "Contact" in sectionRefs.current)
            sectionRefs.current["Contact"] = el;
        }}
      />
      {currentPage != "contact-page" && (
        <CornerInfo position="bottom-left" textTransform="uppercase">
          {cornerInfoContent && cornerInfoContent[currentPage]?.left.map((info) => (
            <div className="text-xs sm:text-sm flex" key={info}>
              <span>[</span>
              <Typewriter text={info} />
              <span>]</span>
            </div>
          ))}
        </CornerInfo>
      )}
      {currentPage != "contact-page" && (
        <CornerInfo position="bottom-right" textTransform="uppercase">
          {cornerInfoContent && cornerInfoContent[currentPage]?.right.map((info) => (
            <div className="text-xs sm:text-sm flex" key={info}>
              <span>[</span>
              <span className="mr-1">&darr;</span>
              <Typewriter text={info} />
              <span>]</span>
            </div>
          ))}
        </CornerInfo>
      )}
    </div>
  );
};

export default App;
