import { FC, useState, useEffect, useRef } from "react";
import { Header, CornerInfo, Typewriter} from "./components";
import Pages from "./pages";

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

const observerConfig = {
  root: document.getElementById('app'),
  rootMargin: "-10%",
}

const App: FC = () => {
  const [currentPage, setCurrentPage] = useState("");
  const [cornerInfoContent, setCornerInfoContent] = useState<{
    left: string[],
    right: string[]
  }>({
    left: [],
    right: [],
  });
  const sectionRefs = useRef<HTMLElement[]>([]);

  const handleClick = () => {
    if (sectionRefs.current) {
      sectionRefs.current[3].scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCornerInfoContent(cornerInfoTemplate[entry.target.id]);
          setCurrentPage(entry.target.id);
        }
      });
    }, observerConfig);

    sectionRefs.current.forEach((sectionRef) => {
      observer.observe(sectionRef);
    });

    return () => {
      sectionRefs.current.forEach((sectionRef) => {
        observer.unobserve(sectionRef);
      });
    };
  }, [sectionRefs]);

  return (
    <div
      id="app"
      className="w-full h-screen overflow-y-scroll snap-y snap-mandatory *:text-[#FFE] bg-gradient-cosmic"
    >
      <Header onClick={handleClick}/>
      <Pages.Landing ref={(el:HTMLElement) => sectionRefs.current[0] = el}/>
      <Pages.Skillset ref={(el:HTMLElement) => sectionRefs.current[1] = el}/>
      <Pages.Showcase ref={(el:HTMLElement) => sectionRefs.current[2] = el}/>
      <Pages.Contact ref={(el:HTMLElement) => sectionRefs.current[3] = el}/>
      {currentPage != 'contact-page' &&
      <CornerInfo
        position='bottom-left'
        textTransform='uppercase'
      >
        {cornerInfoContent.left.map(info => (
          <div className='flex' key={info}>
            <span>[</span>
            <Typewriter text={info} />
            <span>]</span>
          </div>
        ))}
      </CornerInfo>
      }
      {currentPage != 'contact-page' &&
      <CornerInfo
        position='bottom-right'
        textTransform='uppercase'
      >
        {cornerInfoContent.right.map(info => (
          <div className='flex' key={info}>
            <span>[</span>
            <span className='mr-1'>&darr;</span>
            <Typewriter text={info} />
            <span>]</span>
          </div>
        ))}
      </CornerInfo>
      }
    </div>
  );
};

export default App;
