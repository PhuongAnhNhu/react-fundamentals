// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef} from 'react'

function UsernameForm({onSubmitUsername}) {
  const refUserName = useRef('')
  const refPassword = useRef('')
  function handlerSubmit(event) {
    event.preventDefault()
    const username = refUserName.current.value
    const password = refPassword.current.value
    onSubmitUsername(username, password)
  }

  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handlerSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" ref={refUserName} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input id="password" type="text" ref={refPassword} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = (username, password) =>
    alert(`You entered: ${username} You password: ${password}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
