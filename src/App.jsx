import { useRef} from 'react'
import './App.css'

function App() {
  const Count = useRef(0)
  function fun(){
    const ne = Count.current++
    alert(ne)
    
  }

  return (
    <>
    <h1>Fuck you</h1>
    <div onClick={fun}>click now</div>
    </>
  )
}

export default App
