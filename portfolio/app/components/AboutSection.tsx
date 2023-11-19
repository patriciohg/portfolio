"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA: Tabdata[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C#</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Java</li>
        <li>Nodejs</li>
        <li>.NET Core</li>
        <li>.NET Framework</li>
        <li>React</li>
        <li>Express</li>
        <li>SQL Server</li>
        <li>Graphql</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>EntityFramework</li>        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Science Engineer</li>
        <li>Universidad de Valparaíso, Chile</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li><a href="https://www.credly.com/badges/807841e6-dcb0-4f9e-9913-dae744454127" target="__blank">Microsoft Certified: Azure Fundamentals</a></li>
        <li><a href="https://www.freecodecamp.org/certification/Patriciohg/javascript-algorithms-and-data-structures" target="__blank">JavaScript Algorithms and Data Structures </a></li>
        <li><a href="https://coursera.org/verify/EAUTV5UCQPSS" target="__blank">Programming with JavaScript</a></li>
        <li><a href="https://www.credly.com/badges/1cc4b6a6-2f97-44c8-ac58-d605b76d9625/public_url" target="__blank">Scrum Foundations</a></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src="/hero-img/1.jfif" width={500} height={500} alt={""} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, C#, Java, using differents frameworks such as React, .NET Core, .NET Framework, Express, 
            also different databases such as MongoDB, PostgreSQL, Sequelize, SQL server, Graphql and Git. I am a quick learner 
            and I am always looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;