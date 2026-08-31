import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import Contextprovider from './Context/Contextprovider.jsx';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
   <Contextprovider>
      <BrowserRouter>
         <App />
         <ToastContainer position="top-center" style={{
            top: "20px"
         }} autoClose={500} />
      </BrowserRouter>
   </Contextprovider>

)
