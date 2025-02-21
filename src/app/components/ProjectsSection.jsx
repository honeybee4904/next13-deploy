"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "MediMinder",
    description: " An IOT-Enable Medication Dispenser Controlled By Mobile Application",
    image: "/images/projects/project1.png",
    tag: ["All", "Hareware Software IOT System"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Animal Kingdom Petshop Web base System",
    description: "An Online PetShop website where to purchase A Pet supply such as, Food, Toys, Accessories and more",
    image: "/images/projects/project2.png",
    tag: ["All", "Web System"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Puñada blog and ordering system",
    description: "The Puñada Web Base Blog and Ordering System is a ecommerce platform that allows users to read articles, leave comments, and purchase related products.",
    image: "/images/projects/project3.png",
    tag: ["All", "Web System"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "KJB Laundry Hub",
    description: "Project 4 descriptionThe KJB Laundry Hub Management System is a state-of-the-art software solution designed to revolutionize the way laundry facilities are managed and operated. ",
    image: "/images/projects/project4.png",
    tag: ["All", "Web System"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Smart Sorting TrashBin",
    description: "Hardware Software Integration, Automated Sorting Trashbin where separating waste such as Biodegradable, Metallic, And Dry ",
    image: "/images/projects/project5.png",
    tag: ["All", "Hareware Software IOT System"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "RC Boat Controlled by mobile phone",
    description: "An hardware Software Integration, Rc boat controlled by mobile phone using bluetooth",
    image: "/images/projects/project6.png",
    tag: ["All", "Hareware Software IOT System"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Projects and Achievements
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web System"
          isSelected={tag === "Web System"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Hareware Software IOT System"
          isSelected={tag === "Hareware Software IOT System"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
