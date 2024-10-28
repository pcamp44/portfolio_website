const skills = [
  { skill: 'JavaScript', image: 'JavaScript' }, { skill: 'Python', image: 'Python' }, { skill: 'Node JS', image: 'Node JS' },
  { skill: 'React', image: 'React' }, { skill: 'HTML', image: 'HTML' }, { skill: 'CSS', image: 'CSS' }, { skill: 'SQL', image: 'SQL' }
];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      entry.target.classList.remove('hidden');
    } else {
      entry.target.classList.add('hidden');
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

export default function Skills() {
  return (
    <div className="container" id="skills">
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