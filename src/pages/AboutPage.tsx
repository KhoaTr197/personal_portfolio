import { forwardRef, useEffect, useState } from "react";
import { AboutContent } from "../@types/state";
import { PageProps, PageRef } from "../@types/component";
import { Badge } from "../components";

const About = forwardRef(({}: PageProps, ref: PageRef) => {
  const [about, setAbout] = useState<AboutContent | null>(null);

  useEffect(() => {
    fetch("/content/about_me.json")
      .then(res => res.json())
      .then(data => setAbout(data));
  }, []);

  return (
    <section
      ref={ref}
      id='about-page'
      className='w-full h-[200vh] md:h-screen relative snap-start bg-[#FFE]'
      data-bg='#FFE'
    >
      <div className="w-1/2 md:h-full pt-12 md:pt-40 px-4 mx-auto text-black">
        <p className='md:text-3xl xl:text-4xl font-medium px-auto'>{about?.summary}</p>
        <div className="pt-16 xl:pt-24 flex justify-around xl:justify-evenly">
          <Badge
            quantity={about?.totalProjects || 0}
            info='total projects'
          />
          <Badge
            quantity={about?.yearsExperience || 0}
            info='year of experience'
          />
        </div>
      </div>
    </section>
  );
});
export default About;
