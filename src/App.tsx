import React from 'react'

function App() {
  return (
    <canvas
      width={window.innerWidth}
      height={window.innerHeight}
      onClick={e => {
        alert(e.clientX)
      }}
    />
  )
}

export default App