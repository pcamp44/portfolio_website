const programming_skills = [
  { skill: 'JavaScript', image: 'https://ik.imagekit.io/1h1de1d5x/static/JavaScript.png?updatedAt=1751081828901'}, { skill: 'Python', image: 'https://ik.imagekit.io/1h1de1d5x/static/Python.png?updatedAt=1751081827740' }
];

const front_end_skills = [
  { skill: 'React', image: 'https://ik.imagekit.io/1h1de1d5x/static/React.png?updatedAt=1751081838754' }, { skill: 'HTML', image: 'https://ik.imagekit.io/1h1de1d5x/static/HTML.png?updatedAt=1751081838746' }, { skill: 'CSS', image: 'https://ik.imagekit.io/1h1de1d5x/static/CSS.png?updatedAt=1751081845736' }
];

const backend_skills = [
  { skill: 'Node JS', image: 'https://ik.imagekit.io/1h1de1d5x/static/Node%20JS.png?updatedAt=1751081828152' }, { skill: 'SQL', image: 'https://ik.imagekit.io/1h1de1d5x/static/SQL.png?updatedAt=1751081828190' }
]

export default function SkillsSection() {
  return (
    <div className="skills">
      <div className="py-5 container">
        <h1>Skills</h1>
        <h3 className="subheading">Programming Language</h3>
        <div className="skills-wrapper">
          {programming_skills.map((skill) => (
            <div className="skills-box" key={skill.skill}>
              <img src={skill.image} alt={skill.skill} width={'60px'} height={'55px'} />
            </div>
          ))}
        </div>
        <h3 className="subheading">Front-end</h3>
        <div className="skills-wrapper">
          {front_end_skills.map((skill) => (
            <div className="skills-box" key={skill.skill}>
              <img src={skill.image} alt={skill.skill} width={'60px'} height={'55px'} />
            </div>
          ))}
        </div>
        <h3 className="subheading">Back-end & Database</h3>
        <div className="skills-wrapper">
          {backend_skills.map((skill) => (
            <div className="skills-box" key={skill.skill}>
              <img src={skill.image} alt={skill.skill} width={'60px'} height={'55px'} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}