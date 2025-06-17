import { FC, useEffect, useState } from "react";
import { Header, CornerInfo, Typewriter } from "./components";
import Pages from "./pages";
import { useObserver } from "./hook/useObserver";
import { useDeviceTypeContext } from "./context/DeviceTypeContext";
import { CornerInfoContent } from "./@types/state";

const cornerInfoMap: {[index: string]: CornerInfoContent} = {
  "landing-page": {
    left: ["software developer", "19 years old"],
    right: ["scroll down"],
  },
  "about-page": {
    left: ["about"],
    right: ["skills"],
  },
  "skillset-page": {
    left: ["skills"],
    right: ["works"],
  },
  "showcase-page": {
    left: ["works"],
    right: ["contact"],
  },
  "contact-page": {
    left: [""],
    right: [""],
  },
};

const App: FC = () => {
  const [currentPage, setCurrentPage] = useState("");
  const [cornerInfoContent, setCornerInfoContent] = useState<CornerInfoContent>({
    left: [],
    right: [],
    className: "#FFE",
  });
  const [observerConfig, setObserverConfig] = useState<{ root: HTMLElement | null; rootMargin: string }>({
    root: null,
    rootMargin: "-50%",
  });
  const deviceType = useDeviceTypeContext();

  const sectionRefs = useObserver(
    {
      Landing: null,
      About: null,
      Skillset: null,
      Showcase: null,
      Contact: null
    },
    (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        const content = cornerInfoMap[entry.target.id];
        if(entry.target.getAttribute("data-bg") === "#FFE") {
          setCornerInfoContent({
            left: content.left,
            right: content.right,
            className: "*:text-[#000]",
          });
        }
        else {
          setCornerInfoContent({
            left: content.left,
            right: content.right,
            className: "*:text-[#FFE]",
          });
        };
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
        {currentPage != "contact-page" && (
          <CornerInfo 
            className={cornerInfoContent.className ? cornerInfoContent.className : ""}
            position="bottom-left"
            textTransform="uppercase"
          >
            {cornerInfoContent.left.map((info) => (
              <div className="text-xs sm:text-sm flex" key={info}>
                <span>[</span>
                <Typewriter text={info} />
                <span>]</span>
              </div>
            ))}
          </CornerInfo>
        )}
        {currentPage != "contact-page" && (
          <CornerInfo 
            className={cornerInfoContent.className ? cornerInfoContent.className : ""}
            position="bottom-right"
            textTransform="uppercase"
          >
            {cornerInfoContent.right.map((info) => (
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
