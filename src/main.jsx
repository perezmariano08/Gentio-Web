import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import global_es from './components/translations/es/global.json'
import global_en from './components/translations/en/global.json'
import global_fr from './components/translations/fr/global.json'


i18next.init({
   lng: 'es',
   interpolation: { escapeValue: false },
   resources: {
      es: { global: global_es },
      en: { global: global_en },
      fr: { global: global_fr },
   },
   react: {
      useSuspense: false,
   },
})

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <I18nextProvider i18n={i18next}>
         <App />
         <GlobalStyles/>
      </I18nextProvider>
   </StrictMode>,
)
