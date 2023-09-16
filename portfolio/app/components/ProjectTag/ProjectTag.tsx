import React from "react";
//
const ProjectTag = (projectTag: ProjectTag) => {
  const buttonStyles = projectTag.isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => projectTag.onClick(projectTag.name)}
    >
      {projectTag.name}
    </button>
  );
};

export default ProjectTag;