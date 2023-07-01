import ReactDOM from 'react-dom/client'
import './main.css'

import App from './screens/App'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
