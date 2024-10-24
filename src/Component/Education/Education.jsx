import "./Education.css";

export default function Education() {
  return (
    <>
      <div className="educationCourses" id="education">
        <h1>Education and Courses</h1>
        <div className="container2">
          <div className="educationSection">
            <div className="card">
              <h2>Diploma in Computer Engineering</h2>
              <h3>Damascus university</h3>
              <p>Diploma Degree: Good </p>
            </div>
            <div className="card">
              <h2>Bachelor in Information Technology </h2>
              <h3>Syrian Virtual University | Damascus - Syria</h3>
              <p>Bachelor Degree: Very Good</p>
            </div>
          </div>
          <div className="coursesSection">
            <div className="card">
              <h2>Course: Frontend Developer</h2>
              <h3>Syrian Computer Society | Damascus - Syria </h3>
              <p>
                Fully frontend web development training, HTML,CSS,JS including
                frontend libraries and frameworks.
              </p>
            </div>
            <div className="card">
              <h2>Course: Frontend Developer</h2>
              <h3>Vica Web Solutions | Online </h3>
              <p>
                Fully frontend web development training, HTML,CSS,JS including
                frontend libraries and frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
