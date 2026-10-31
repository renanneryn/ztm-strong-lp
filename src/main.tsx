import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import PrivacyPolicy, {PRIVACY_PATH} from './components/PrivacyPolicy.tsx';
import './index.css';

// Sem router: a política é uma página própria, servida pelo rewrite do vercel.json.
const isPrivacy = window.location.pathname.replace(/\/+$/, '') === PRIVACY_PATH;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isPrivacy ? <PrivacyPolicy /> : <App />}
  </StrictMode>,
);
