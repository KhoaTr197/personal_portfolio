import { forwardRef, useState } from "react";
import { Grid } from "@/components";
import ExternalLinkIcon from "@/assets/icons/ExternalLink";
import { PageProps, PageRef } from "@/types/component";
import { Project } from "@/types/data";
import projectsData from "@/data/projects";

const Showcase = forwardRef(({ }: PageProps, ref: PageRef) => {
  const [projects] = useState<Project[] | null>(projectsData);

  return (
    <section ref={ref} id="showcase-page" className="w-full h-screen relative snap-start">
      <div className="h-full flex justify-center items-center lg:pt-20">
        <Grid.Layout size={[4, 4]} gap={16} styles="w-[313px] md:w-[466px] lg:w-[616px] h-[313px] md:h-[466px] lg:h-[616px]">
          {projects && projects.map((project) => {
            const background = project.isOther ? "" : `/images/projects/${project.image}`;
            if (project.isOther)
              return (
                <Grid.Item
                  key={project.name}
                  size={[2, 2]}
                  styles={`relative hover:scale-1.015 transition-transform duration-300 bg-[#FFE] rounded-3xl shadow-[0_0_16px_0_rgba(0,0,0,0.1)]`}
                >
                  <a
                    className="block w-full h-full p-2 md:p-4 text-black"
                    href={project.url}
                    target="_blank"
                  >
                    <div className="w-full h-full flex flex-col justify-between items-end">
                      <ExternalLinkIcon size={64} style="size-8 lg:size-fit *:stroke-[#000]" />
                      <span className="uppercase text-xl md:text-2xl lg:text-3xl font-medium inline-flex items-center w-fit">
                        {project.name}
                      </span>
                    </div>
                  </a>
                </Grid.Item>
              );
            else
              return (
                <Grid.Item
                  key={project.name}
                  size={[2, 2]}
                  background={background}
                  styles={`relative hover:scale-1.015 transition-transform duration-300 bg-contain bg-center rounded-3xl shadow-[0_0_16px_0_rgba(0,0,0,0.1)]`}
                >
                  <a
                    className="block w-full h-full backdrop-brightness-90 backdrop-blur-[1px]"
                    href={project.url}
                    target="_blank"
                  >
                    <div className="absolute text-center left-0 right-0 bottom-2 md:bottom-4">
                      <span className="inline-flex items-center text-base md:text-xl lg:text-3xl font-medium text-[#FFE]">
                        {project.name}
                        <ExternalLinkIcon
                          size={32}
                          style="size-4 md:size-6 lg:size-fit ml-2 *:stroke-[#FFE]"
                        />
                      </span>
                    </div>
                  </a>
                </Grid.Item>
              );
          })}
        </Grid.Layout>
      </div>
    </section>
  );
});
export default Showcase;
