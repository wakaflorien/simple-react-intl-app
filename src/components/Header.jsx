import {FormattedMessage} from "react-intl";
import {useContext} from "react";
import {Context} from "./Wrapper.jsx";
const Header = () => {
    const context = useContext(Context)
    return (
        <header>
            {import.meta.env.VITE_API_URL}
            <p>
                <FormattedMessage id="app.header" defaultMessage="Edit the files and save to reload"
                                  values={{fileName: 'src/App.jsx', code: (word) => <strong>{word}</strong>}}/>
            </p>
            <select value = {context.locale} onChange={context.selectLanguage}>
                <option value= 'en'>English</option>
                <option value= 'fr'>French</option>
                <option value= 'ar'>Arabic</option>
            </select>
        </header>
    )
}
export default Header
