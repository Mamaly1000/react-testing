import { useEffect, useState } from 'react'

interface props {
  title?: string
  skills?: string[]
  loggedIn?: boolean
}

const Skills = ({ skills = [], title, loggedIn = false }: props) => {
  const [isLogin, setLogin] = useState(loggedIn)
  const [startLearning, setStartLearning] = useState(false)
  const [displaySkills, setDisplaySkills] = useState(false)

  useEffect(() => {
    if (startLearning) {
      setTimeout(() => {
        setDisplaySkills(true)
      }, 3000)
    }
  }, [startLearning])
  return (
    <div title="skills-container">
      <h1>{title ? title : 'no title'}</h1>
      {skills.length > 0 && (
        <ul>{displaySkills && skills.map((s) => <li key={s}>{s}</li>)}</ul>
      )}
      {skills.length === 0 && <div>there is no skill</div>}
      {isLogin ? (
        <p onClick={() => setStartLearning(true)}>wellcome back</p>
      ) : (
        <button onClick={() => setLogin(true)}>login</button>
      )}
    </div>
  )
}
export default Skills
