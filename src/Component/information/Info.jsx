import "./Info.css";
import personalImage from "/image/personalImage.jpg";

export default function Info() {
  return (
    <div className="flex items-center justify-center">
      <div className="info-container" id="home">
        <div className="desc">
          <h1>HEY! I’m Lama, Front-end Developer</h1>
          <p>
            I creat professional web application for business, companies,
            skilled in leadership, seeking to leverage solid development skills
            with focus on collaboration, communication and passion.
          </p>
          <button>
            <a className="ContactMe" href="https://t.me/Lama_Hseian">
              Contact Me
            </a>
          </button>
        </div>
        <div className="personalimg">
          <img src={personalImage} />
        </div>
      </div>
    </div>
  );
}
