import ReactDOM from 'react-dom/client'
import App from './screens/App.jsx'
import './main.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

)
