import "./Skills.css";
import htmlImage from "/image/html.png";
import cssImage from "/image/css.png";
import jsImage from "/image/js.png";
import bootImage from "/image/bootstrap.png";
import tailwindImage from "/image/tailwind.png";
import reactImage from "/image/react.png";
import gitImage from "/image/github.png";


export default function Skills() {
  return (
    <>
      <h1 className="hardSkills" id="skills">
        Hard Skills
      </h1>
      <div className="skills">
        <div>
          <img src={htmlImage} alt="" />
        </div>
        <div>
          <img src={cssImage} alt="" />
        </div>
        <div>
          <img src={jsImage} alt="" />
        </div>
        <div>
          <img src={bootImage} alt="" />
        </div>
        <div>
          <img src={tailwindImage} alt="" />
        </div>
        <div>
          <img src={reactImage} alt="" />
        </div>
        <div>
          <img src={gitImage} alt="" />
        </div>
      </div>
    </>
  );
}
