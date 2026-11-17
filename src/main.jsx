import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/useAuth.jsx';
import { FinanceProvider } from './context/FinanceContext.jsx';

const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.dataset.theme = savedTheme;

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <FinanceProvider>
                <App />
            </FinanceProvider>
        </AuthProvider>
  </StrictMode>,
)
