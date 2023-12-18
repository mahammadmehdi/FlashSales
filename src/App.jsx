import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './Layout/MainLayout';
import Home from './pages/Home';

function App() {
  
  

  return (
    <>
   <BrowserRouter >
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/" element={<Home></Home>} />
          {/* <Route path="/about" element={<About></About>} /> */}
          {/* <Route path="/contact" element={<Contact></Contact>} /> */}
          {/* <Route path="/signup" element={<SignUp></SignUp>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
