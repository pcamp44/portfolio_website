import { Button } from "reactstrap";

export default function Projects() {
  return (
    <div id="projects">
      <div className="container">
        <h1>Projects</h1>
        {/* Project 1: Interactive timeline*/}
        <div className="row" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
          <div className="col" style={{ display: "flex", flexDirection: 'column' }}>
            <p> Helmed the front-end development of an interactive timeline web application as part of my capstone project at university. This application allows for their users who work in the mining industry to view project milestones visually to enhance project understanding. </p>
            <br />
            <div className="project-skills">
              <span className="badge">HTML</span> 
              <span className="badge">CSS</span>
              <span className="badge">JavaScript</span>
              <span className="badge">Bootstrap</span>
              <span className="badge">Python</span>
            </div>
            <p style={{fontSize: '15px'}}>*Note: due to confidentiality agreements, detailed screenshots and code cannot be shared. However, I will be happy to discuss my contributions and the technoglies used in more depth during an interview.</p>
            <Button className="btn btn-lg" style={{ margin: "auto" }}>View</Button>
          </div>

          <div className="col">
            <iframe title="project1" src="https://editor.p5js.org/pcamp44/full/6Zme4hLQ1" width={'500px'} height={'300px'} style={{ marginLeft: '100px' }}></iframe>
            <h2>Interactive Timeline</h2>
          </div>
        </div>

        {/* Project 2*/}
        {/* <div className="row" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
          <div className="col" style={{ display: "flex", flexDirection: 'column' }}>
            <p> This fully responsive website! Find the technolgies I used below :) </p>
            <div className="project-skills">
              <span className="badge">HTML</span> 
              <span className="badge">CSS</span>
              <span className="badge">JavaScript</span>
              <span className="badge">Bootstrap</span>
            </div>
            <Button className="btn btn-lg" style={{ margin: "auto" }}>View</Button>
          </div>

          <div className="col">
            <iframe title="project2" src="https://editor.p5js.org/pcamp44/full/6Zme4hLQ1" width={'500px'} height={'300px'} style={{ marginLeft: '100px' }}></iframe>
            <h2>Portfolio Website</h2>
          </div>
        </div> */}
      </div>
    </div>
  );
}