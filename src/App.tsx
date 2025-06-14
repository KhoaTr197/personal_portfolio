import { FC, useEffect, useState } from "react";
import { Header, CornerInfo, Typewriter } from "./components";
import Pages from "./pages";
import { useObserver } from "./hook/useObserver";
import { ThreeDSkillsetPage } from "./pages/3DSkillsetPage";

type cornerInfoTemplateType = {
  [index: string]: {
    left: string[],
    right: string[]
  };
};

const cornerInfoTemplate: cornerInfoTemplateType = {
  "landing-page": {
    left: ["software developer", "19 years old"],
    right: ["scroll down"],
  },
  "skillset-page": {
    left: ["about"],
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
  const [cornerInfoContent, setCornerInfoContent] = useState<{
    left: string[],
    right: string[]
  }>({
    left: [],
    right: [],
  });
  const [observerConfig, setObserverConfig] = useState<{ root: HTMLElement | null; rootMargin: string }>({
    root: null,
    rootMargin: "-50%",
  });

  const sectionRefs = useObserver(
    {
      Landing: null,
      Skillset: null,
      Showcase: null,
      Contact: null
    },
    (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        setCornerInfoContent(cornerInfoTemplate[entry.target.id]);
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
      <ThreeDSkillsetPage />
      {/* <Header onClick={handleClick} />
        <Pages.Landing
          ref={(el: HTMLElement | null) => {
            if (sectionRefs.current && "Landing" in sectionRefs.current)
              sectionRefs.current["Landing"] = el;
          }}
        />
        <Pages.Skillset
          ref={(el: HTMLElement | null) => {
            if (sectionRefs.current && "Skillset" in sectionRefs.current)
              sectionRefs.current["Skillset"] = el;
          }}
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
          <CornerInfo position="bottom-left" textTransform="uppercase">
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
          <CornerInfo position="bottom-right" textTransform="uppercase">
            {cornerInfoContent.right.map((info) => (
              <div className="text-xs sm:text-sm flex" key={info}>
                <span>[</span>
                <span className="mr-1">&darr;</span>
                <Typewriter text={info} />
                <span>]</span>
              </div>
            ))}
          </CornerInfo>
        )} */}
    </div>
  );
};

export default App;
