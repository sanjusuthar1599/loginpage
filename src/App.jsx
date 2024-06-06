
import BasicExample from './componet/NavBar'
import  Ragister from './componet/Ragister'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './componet/Login'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
   <>
   <BrowserRouter>
   <BasicExample/>
      <Routes>
      <Route path="/Ragister" element={<Ragister />} />
          <Route path="/" element={<Login />} />
          {/* <Route path="/Ragister" element={<Ragister />} /> */}
        
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
