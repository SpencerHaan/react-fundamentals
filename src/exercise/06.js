// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef()
  function handleSubmit(event) {
    onSubmitUsername(usernameInputRef.current.value)
    event.preventDefault()
  }

  const [error, setError] = React.useState()
  function handleChange(event) {
    const value = event.target.value
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : "Username must be lowercase")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" ref={usernameInputRef} type="text" onChange={handleChange} />
      </div>
      <div style={{color: "red"}} role="alert">{error}</div>
      <button type="submit" disabled={Boolean(error)}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
