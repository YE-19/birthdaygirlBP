
import { Route, Routes } from 'react-router-dom'
import BirthdayCake from './pages/BirthdayCake'
import Home from './pages/Home'
import Letter from './pages/Letter'
import Memories from './pages/Memories'
import Video from './pages/Video'




function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/BirthdayCake' element={<BirthdayCake />}/>
        <Route path='/letter' element={<Letter />}/>
        <Route path='/memories' element={<Memories />}/>
        <Route path='/vid' element={<Video />}/>

      </Routes>
    </>
  )
}

export default App
