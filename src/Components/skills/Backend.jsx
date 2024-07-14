import React from "react";

const Backend = () => {
    const skills = [
        { name: "MongoDB", level: "Intermediate" },
        { name: "Node Js", level: "Basic" },
        { name: "MySQL", level: "Intermediate" },
        { name: "SQL", level: "Intermediate" },
        { name: "Express", level: "Intermediate"},
        { name: "Postman", level: "Intermediate"}
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
            <h3 className="skills__title">Backend Developer</h3>
            <div className="skills__box">
                <div className="skills__group">
                    {skills.slice(0, 3).map((skill, index) => (
                        <SkillItem key={index} {...skill} />
                    ))}
                </div>
                <div className="skills__group">
                    {skills.slice(3).map((skill, index) => (
                        <SkillItem key={index + 3} {...skill} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Backend;