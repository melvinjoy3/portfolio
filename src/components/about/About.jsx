import "./about.css";
import Me from "../../img/melbin.png";

const About = () => {

  const skills = {
    languages: ["JavaScript", "TypeScript", "JSX", "HTML", "CSS"],
    frameworks: ["React.js", "Next.js", "Node.js", "Express.js"],
    libraries: [
      "Tailwind", "Zustand", "React-router", "Stripe",
      "Bootstrap", "Material UI", "SCSS", "Unit test"
    ],
    cloud: ["AWS-Lambda", "AWS-Cognito"],
    devTools: ["Visual Studio code", "Git", "Gitlab", "React-dev tools"],
    backendAndApi: ["REST API", "Authentication (OAuth)", "API Integration"],
    databases: ["MongoDB", "AWS-DynamoDB"]
  };

  const skillLabels = {
    languages: "Languages",
    frameworks: "Frameworks",
    libraries: "Libraries",
    backendAndApi: "Backend and API",
    cloud: "Cloud",
    devTools: "Dev Tools",
    databases: "Databases"
  };

  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          A highly skilled software professional with a focus on delivering robust React applications. Proven ability to create dynamic and responsive web interfaces, ensuring seamless user experiences. Committed to team collaboration and adaptability, showcasing expertise in JavaScript, HTML, and CSS.
        </p>

        <div style={{ marginTop: "15px" }}>
          <h1 className="a-title">Skills</h1>
          <p className="a-desc">
            <ul>
              {Object.keys(skillLabels).map((key) => (
                <li key={key}>
                  <strong>{skillLabels[key]}:</strong> {skills[key].join(", ")}
                </li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
