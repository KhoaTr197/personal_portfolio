import { forwardRef, useEffect, useRef, useState } from "react";
import { AboutContent } from "@/types/data";
import { BadgeRef, PageProps, PageRef } from "@/types/component";
import { Badge } from "@/components";
import aboutMe from "@/data/aboutMe";

const About = forwardRef(({
  shouldPlayAnimation
}: PageProps, ref: PageRef) => {
  const [about] = useState<AboutContent | null>(aboutMe);
  const badgeRefs = useRef<BadgeRef[]>([]);

  useEffect(() => {
    if (shouldPlayAnimation) {
      badgeRefs.current.forEach((ref) => {
        ref.start();
      });
    } else {
      badgeRefs.current.forEach((ref) => {
        ref.reset();
      });
    }
  }, [shouldPlayAnimation])

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
            ref={(el: BadgeRef | null) => {
              if (el) badgeRefs.current.push(el)
            }}
            quantity={about?.totalProjects || 0}
            info='total projects'
          />
          <Badge
            ref={(el: BadgeRef | null) => {
              if (el) badgeRefs.current.push(el)
            }}
            quantity={about?.yearsExperience || 0}
            info='year of experience'
          />
        </div>
      </div>
    </section>
  );
});
export default About;
