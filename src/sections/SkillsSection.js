const skills = [
  { id: '01', skill: 'Web Development', description: 'I am passionate about building websites that are reliable and thoughtfully structured, contributing to production applications while deepening my skills as part of a cross-functional graduate role.', stack: ['React', 'JavaScript', 'HTML/CSS'] },
  { id: '02', skill: 'Creative Coding', description: 'I use creative coding to merge creativity and technology - using motion and interaction to make digital experiences feel more expressive, intentional, and human.', stack: ['p5.js', 'CSS Animation'] },
  { id: '03', skill: 'UI/UX Design', description: 'I care deeply about how things look and feel - designing interfaces that prioritise usability, clarity and thoughtful interactions while keeping users at the forefront.', stack: ['Figma', 'Canva', 'Wireframing'] },
  { id: '04', skill: 'Visual Storytelling', description: 'Through film photography and design, I\'ve developed an eye for composition and narrative, shaping the way I structure digital experiences.', stack: ['Film Photography', 'Layout Design', 'Typography'] }
]

export default function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      {/* skills header */}
      <div className="section-header">
        <div className="section-head">
          <span className="section-num">02</span>
          <span className="section-title">Skills</span>
        </div>
        <p className="section-summary">My passion for web development has driven me to create projects that have strengthened my skills across both creative and technical disciplines.</p>
      </div>
      {/* skills */}
      <div className="disciplines">
        {skills.map((skill) => (
          <div key={skill.id} className="discipline">
            <div className="discipline-top">
              <span className="discipline-num">{skill.id}</span>
              <span className="discipline-icon">◇</span>
            </div>
            <h3 className="discipline-title" tag="h5">{skill.skill}</h3>
            <p className="discipline-desc">{skill.description}</p>
            <div className="discipline-stack">
              {skill.stack.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}