import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {IntlProvider} from 'react-intl';
import French from './lang/fr.json'
import Arabic from './lang/ar.json'
import English from './lang/en.json'
import Wrapper from "./components/Wrapper.jsx";

const locale = navigator.language
let lang;
if (locale === "en") {
    lang = English;
} else {
    if (locale === "fr") {
        lang = French;
    } else {
        lang = Arabic;
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Wrapper>
            <App date = {Date.now()} />
        </Wrapper>
    </React.StrictMode>,
)
