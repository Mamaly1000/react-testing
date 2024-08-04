import { useState } from 'react'

const Greet = ({ name }: { name?: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <h1>hello to you {name}</h1>
      {!open ? (
        <button onClick={() => setOpen((prev) => !prev)} title="open-navbar">
          open
        </button>
      ) : (
        <button onClick={() => setOpen((prev) => !prev)} title="close-navbar">
          close
        </button>
      )}
      <img src="http://sdfsdf.com/api/pic.img" alt="main-image" />
      <form aria-valuetext="registration-form" action="">
        <h1>this is a registration form</h1>
        <h2>fill the registration inputs</h2>
      </form>
      <form action="" aria-valuetext="login-form">
        <h1>this is a login form</h1>
        <h2>fill the login inputs</h2>
        <input
          type="text"
          defaultValue="mamaly"
          placeholder="enter your name"
        />
      </form>
    </div>
  )
}

export default Greet
