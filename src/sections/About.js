const skills = [
  { skill: 'JavaScript', image: 'JavaScript' }, { skill: 'Python', image: 'Python' }, { skill: 'Node JS', image: 'Node JS' },
  { skill: 'React', image: 'React' }, { skill: 'HTML', image: 'HTML' }, { skill: 'CSS', image: 'CSS' }, { skill: 'SQL', image: 'SQL' }
];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else{
      entry.target.classList.remove('show');
    } 
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el)); 

export default function About() {
  return (
    <div className="container" id="about">
      <h1>About Me</h1>

      <div className="row">
        <div className="col">
          <p>I am an aspiring full-stack web developer currently completing a Bachelor's degree in Information Technology (Computer Science) at the Queensland University of Technology.</p>
          <p> When I'm not developing, I love to create generative or 3D art, playing guitar or reading books.</p>
        </div>

        <div className="col" style={{ textAlign: 'center' }}>
          <h2>Pauline</h2>
          <h2>Pauline</h2>
          <h2>Pauline</h2>
        </div>
      </div>

      <div style={{paddingTop: '50px', paddingBottom: '50px'}}>
        <h2>My tech stack...</h2>
        <p>My expertise lies in front-end development, having gained most of my experience from coursework or pursuing my own passion projects.</p>
        <ul className="skillsList">
          {skills.map((skill) => (
            <li className="hidden">
              <img src={require('../static/' + skill.image + '.png')} alt={skill.skill} width={'60px'} height={'55px'} />
              <br /> {skill.skill}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}