import { forwardRef, ReactNode, Ref } from "react";
import { Grid } from "../components";
import ExternalLinkIcon from "../assets/icons/ExternalLink";
import weatherAppImg from "../assets/images/projects/weather_tracker_app.jpg";

type ShowcaseProps = {
  children?: ReactNode;
}
type ShowcaseRef = Ref<HTMLElement>

const projects = [
  {
    name: "Weather App",
    image: weatherAppImg,
    url: "http://weather-app-khoatr-vite-react.netlify.app",
  },
  {
    name: "See more in GitHub",
    url: "http://github.com/KhoaTr197?tab=repositories",
  },
  {
    name: "Kickz",
    url: "https://github.com/KhoaTr197/kickz",
  },
  {
    name: "Kickz API",
    url: "https://github.com/KhoaTr197/kickz_api",
  },
];

const projectsLength = projects.length;

const Showcase = forwardRef(({}: ShowcaseProps, ref: ShowcaseRef) => {
  return (
    <section ref={ref} id="showcase-page" className="w-full h-screen relative snap-start">
      <div className="h-full flex justify-center items-center">
        <Grid.Layout size={[4, 4]} gap={16} styles="w-[313px] md:w-[616px] h-[313px] md:h-[616px]">
          {projects.map((project, idx) => {
            if (idx + 1 == Math.round(projectsLength / 2))
              return (
                <Grid.Item
                  key={project.name}
                  size={[2, 2]}
                  styles={`relative hover:scale-1.015 transition-transform duration-300 bg-[#FFE] rounded-3xl shadow-[0_0_16px_0_rgba(0,0,0,0.1)]`}
                >
                  <a
                    className="block w-full h-full p-4 text-black"
                    href={project.url}
                    target="_blank"
                  >
                    <div className="w-full h-full flex flex-col justify-between items-end">
                      <ExternalLinkIcon size={64} style="size-8 md:size-fit *:stroke-[#000]" />
                      <span className="uppercase md:text-3xl font-medium inline-flex items-center w-fit">
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
                  background={project.image}
                  styles={`relative hover:scale-1.015 transition-transform duration-300 bg-contain bg-center rounded-3xl shadow-[0_0_16px_0_rgba(0,0,0,0.1)]`}
                >
                  <a
                    className="block w-full h-full backdrop-brightness-90 backdrop-blur-[1px]"
                    href={project.url}
                    target="_blank"
                  >
                    <div className="absolute text-center left-0 right-0 bottom-4">
                      <span className="inline-flex items-center text-xs md:text-3xl font-medium text-[#FFE]">
                        {project.name}
                        <ExternalLinkIcon
                          size={32}
                          style="size-4 md:size-fit ml-2 *:stroke-[#FFE]"
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
