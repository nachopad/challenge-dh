import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { InitDataProvider } from './context/InitDataContext.jsx'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <InitDataProvider>
        <App />
      </InitDataProvider>
    </BrowserRouter>
)
