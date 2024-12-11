"use client";
import Image from "next/image";
import { CodeIcon } from "lucide-react";
import SlideToTop from "@/components/SlideToTop";
import { getProjects } from "../../sanity/sanity-utils";
import { useEffect, useState } from "react";
import { Project } from "../../types/Project";

const ProjectSection = () => {
  // const projects = await getProjects();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getProjects();
      setProjects(projectsData);
    };

    fetchProjects();
  }, []);

  return (
    <div id="projects">
      <SlideToTop>
        <h1 className="text-[45px] text-blue-500">PROJECTS</h1>
      </SlideToTop>
      <SlideToTop delay={0.3}>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          {projects.map((project) => (
            <div
              className="relative w-full h-auto shadow-none sm:shadow-lg rounded-lg flex flex-col "
              key={project._id}
            >
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  className="rounded-t-md object-cover"
                  alt="Banner"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="p-3 flex-grow flex flex-col gap-3 bg-zinc-900">
                <div className="flex flex-col justify-start text-left space-y-2">
                  <p className="text-lg font-extrabold line-clamp-2">
                    {project.name}
                  </p>
                  <p className="text-gray-500 text-sm line-clamp-2">
                    {project.content}
                  </p>
                </div>
                <div className="mt-auto">
                  <a
                    href={project.url}
                    className="no-underline flex flex-row ml-auto  justify-between text-gray-600 hover:text-blue-600 w-[135px]"
                    target="_blank"
                  >
                    <CodeIcon /> Source code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SlideToTop>
    </div>
  );
};

export default ProjectSection;
