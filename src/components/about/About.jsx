import "./about.css";
import Me from "../../img/melbin.png";

const About = () => {
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
          Experienced React JS developer with a passion for transforming
          innovative concepts into user-friendly web applications. Proven
          expertise in crafting efficient and scalable code, with a keen eye for
          detail. Eager to contribute technical skills and a collaborative
          mindset to a growth-oriented team, driving impactful results in a
          dynamic development environment.
        </p>
       
        <div style={{ marginTop: "15px" }}>
          <h1 className="a-title">Skills</h1>
          <p className="a-desc">
          <button>React JS</button>
          <button style={{ marginLeft: "5px" }}>TypeScript</button>
          <button style={{ marginLeft: "5px" }}>Express Js</button>
          <button style={{ marginLeft: "5px" }}>AWS (Lambda, Cognito)</button>
          <button style={{ marginLeft: "5px" }}>MongoDB</button>
          <button style={{ marginLeft: "5px" }}>DynamoDB</button>
          <button style={{ marginLeft: "5px" }}>Zustand</button>
          <button style={{ marginLeft: "5px" }}>Git</button>
          <button style={{ marginLeft: "5px" }}>HTML</button>
          <button style={{ marginLeft: "5px" }}>CSS</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
