import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./Components/HomePage";
import GetStarted from "./Components/GetStarted";
import { AuthProvider } from "./Contexts/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {  
  return(
    <>
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/homepage" element={<HomePage/>} />
          <Route path="/" element={<GetStarted/>} />
        </Routes>
      </AuthProvider>
      </BrowserRouter>
      {/* <Ruf/> */}
    </>
  )
    
}

export default App;
