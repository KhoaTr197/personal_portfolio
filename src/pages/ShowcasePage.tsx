import { FC } from "react";
import { Grid, CornerInfo } from "../components";
import ExternalLinkIcon from "../assets/icons/ExternalLink";
import weatherAppImg from "/images/projects/weather_tracker_app.jpg";

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
    url: "http://x.com",
  },
  {
    name: "Kickz API",
    url: "http://twitter.com",
  },
];

const projectsLength = projects.length;

const Showcase: FC = () => {
  return (
    <section id="showcase-page" className="w-full h-screen relative snap-start">
      <div className="h-full flex justify-center items-center">
        <Grid.Layout size={[4, 4]} gap={16} styles="w-[616px] h-[616px]">
          {projects.map((project, idx) => {
            if (idx + 1 == Math.round(projectsLength / 2))
              return (
                <Grid.Item
                  size={[2, 2]}
                  styles={`relative bg-[#FFE] rounded-3xl shadow-[0_0_16px_0_rgba(0,0,0,0.1)]`}
                >
                  <a
                    className="block w-full h-full p-4 text-black"
                    href={project.url}
                    target="_blank"
                  >
                    <div className="w-full h-full flex flex-col justify-between items-end">
                      <ExternalLinkIcon size={64} style="*:stroke-[#000]" />
                      <span className="uppercase text-3xl font-medium inline-flex items-center w-fit">
                        {project.name}
                      </span>
                    </div>
                  </a>
                </Grid.Item>
              );
            else
              return (
                <Grid.Item
                  size={[2, 2]}
                  background={project.image}
                  styles={`relative bg-contain bg-center rounded-3xl shadow-[0_0_16px_0_rgba(0,0,0,0.1)]`}
                >
                  <a
                    className="block w-full h-full backdrop-brightness-90 backdrop-blur-[1px]"
                    href={project.url}
                    target="_blank"
                  >
                    <div className="absolute text-center left-0 right-0 bottom-4 text-3xl text-[#FFE]">
                      <span className="inline-flex items-center font-medium">
                        {project.name}
                        <ExternalLinkIcon
                          size={32}
                          style="ml-2 *:stroke-[#FFE]"
                        />
                      </span>
                    </div>
                  </a>
                </Grid.Item>
              );
          })}
        </Grid.Layout>
      </div>
      <CornerInfo position="bottom-left" textTransform="uppercase">
        <p>[works]</p>
      </CornerInfo>
      <CornerInfo position="bottom-right" textTransform="uppercase">
        <p>
          [<span className="mr-1">&darr;</span>scroll down]
        </p>
      </CornerInfo>
    </section>
  );
};

export default Showcase;
