import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { SanityProvider } from './context/SanityContext.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <SanityProvider>
      <App />
    </SanityProvider>
  </BrowserRouter>,
)
