import { FC, useEffect, useState } from "react";
import { Header, CornerInfo, Typewriter } from "@/components";
import Pages from "@/pages";
import { useObserver } from "./hook/useObserver";
import { useDeviceTypeContext } from "@/context/DeviceTypeContext";
import { CornerInfoContent } from "@/types/state";

const App: FC = () => {
  const [currentPage, setCurrentPage] = useState("");
  const [cornerInfoContent, setCornerInfoContent] = useState<{ [index: string]: CornerInfoContent } | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [observerConfig, setObserverConfig] = useState<{ root: HTMLElement | null; rootMargin: string }>({
    root: null,
    rootMargin: "-50%",
  });
  const deviceType = useDeviceTypeContext();

  useEffect(() => {
    fetch("/content/corner_info.json")
      .then(res => res.json())
      .then(data => {
        setCornerInfoContent(data);
        setCurrentPage(Object.keys(data)[0]);
      });
  }, []);

  const sectionRefs = useObserver(
    {
      Landing: null,
      About: null,
      Skillset: null,
      Showcase: null,
      Contact: null
    },
    (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting && cornerInfoContent) {
        const page = entry.target.id;
        const content = cornerInfoContent[page];
        if (entry.target.getAttribute("data-bg") === "#FFE") {
          setCornerInfoContent(prev => {
            const newContent = { ...prev };
            newContent[page] = {
              left: content.left,
              right: content.right,
              className: "*:text-[#000]",
            }
            return newContent;
          });
        }
        else {
          setCornerInfoContent(prev => {
            const newContent = { ...prev };
            newContent[page] = {
              left: content.left,
              right: content.right,
              className: "*:text-[#FFE]",
            }
            return newContent;
          });
        };

        if (page === "skillset-page") {
          setIsLoaded(true);
        }

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
        ref={(el: HTMLElement | null) => {
          if (sectionRefs.current && "Landing" in sectionRefs.current)
            sectionRefs.current["Landing"] = el;
        }}
      />
      <Pages.About
        ref={(el: HTMLElement | null) => {
          if (sectionRefs.current && "About" in sectionRefs.current)
            sectionRefs.current["About"] = el;
        }}
        deviceType={deviceType}
      />
      <Pages.ThreeDSkillset
        ref={(el: HTMLElement | null) => {
          if (sectionRefs.current && "Skillset" in sectionRefs.current)
            sectionRefs.current["Skillset"] = el;
        }}
        deviceType={deviceType}
        isLoaded={isLoaded}
      />
      <Pages.Showcase
        ref={(el: HTMLElement | null) => {
          if (sectionRefs.current && "Showcase" in sectionRefs.current)
            sectionRefs.current["Showcase"] = el;
        }}
      />
      <Pages.Contact
        ref={(el: HTMLElement | null) => {
          if (sectionRefs.current && "Contact" in sectionRefs.current)
            sectionRefs.current["Contact"] = el;
        }}
      />
      {currentPage != "contact-page" && cornerInfoContent && (
        <CornerInfo
          position="bottom-left"
          textTransform="uppercase"
        >
          {cornerInfoContent[currentPage]?.left.map((info) => (
            <div className="text-xs sm:text-sm flex" key={info}>
              <span>[</span>
              <Typewriter text={info} />
              <span>]</span>
            </div>
          ))}
        </CornerInfo>
      )}
      {currentPage != "contact-page" && cornerInfoContent && (
        <CornerInfo
          position="bottom-right"
          textTransform="uppercase"
        >
          {cornerInfoContent[currentPage]?.right.map((info) => (
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
