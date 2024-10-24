import "./AboutMe.css";
import HomeArt1 from "/image/Home_art 1.png";

export default function AboutMe() {
  return (
    <>
      <div className="about" id="about">
        <div className="pic">
        <img src={HomeArt1} />;
        </div>
        <div className="information">
          <h1>About Me</h1>
          <h3>I am Lama Hsiean Web designer and Front-end Developer</h3>
          <p>
            I design and develop moderen websites and web applecations, web
            services and online stores. My passion is to become a professinal
            web developer.
          </p>
          <div>
            <button>
              <a download href="src/assets/Lama_hseian.pdf">
                Download CV
              </a>
            </button>
          </div>
          <div className="socialMedia">
            <a href="https://t.me/Lama_Hseian">
              <i class="fa-brands fa-telegram"></i>
            </a>
            <a href="https://github.com/l-hseian1">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.facebook.com/Lama.Hseian">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
