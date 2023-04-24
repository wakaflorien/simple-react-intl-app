import {useContext, useState} from 'react'
import './App.css'
import './scss/main.scss'
import Header from "./components/Header.jsx";
import {FormattedDate, FormattedMessage} from "react-intl";
function App(props) {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Header/>
            <h1>
                <FormattedMessage id="app.channel.plug"
                                  defaultMessage="Vite + React Tutorial brought to you by Lokalise" values={{ blogName: "Lokalise"}}/>
            </h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    <FormattedMessage id="app.counter" defaultMessage="count is"/>
                    {count}
                </button>
            </div>
            <br/>
            <FormattedDate
                value={props.date}
                year = 'numeric'
                month= 'long'
                day = 'numeric'
                weekday = 'long'
            />
            <h1>Test vitest</h1>
        </div>
    )
}

export default App
