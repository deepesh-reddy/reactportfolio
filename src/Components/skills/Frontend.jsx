import React from "react";

const Frontend = () => {
    const skills = [
        { name: "HTML", level: "Intermediate" },
        { name: "CSS", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "Bootstrap", level: "Advanced" },
        { name: "Git", level: "Intermediate" },
        { name: "React", level: "Intermediate" },
        { name: "JQuery", level: "Intermediate" },
        {name: "Tailwind CSS", level: "Intermediate"}
    ];

    const SkillItem = ({ name, level }) => (
        <div className="skills__data">
            <i className="bi bi-patch-check"></i>
            <div>
                <h3 className="skills__name">{name}</h3>
                <span className="skills__level">{level}</span>
            </div>
        </div>
    );

    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend Developer</h3>
            <div className="skills__box">
                <div className="skills__group">
                    {skills.slice(0, 4).map((skill, index) => (
                        <SkillItem key={index} {...skill} />
                    ))}
                </div>
                <div className="skills__group">
                    {skills.slice(4).map((skill, index) => (
                        <SkillItem key={index + 3} {...skill} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Frontend;