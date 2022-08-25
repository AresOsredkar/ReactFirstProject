import { useState,createContext} from 'react'

const SettingsContext = createContext()

export const SettingsProvider = ({children}) => {
    const [theme,setTheme] = useState('light')
    const [enlargedText, setEnlargedText] = useState(false)

    return <SettingsContext.Provider value={[
        theme,
        enlargedText,
        setTheme,
        setEnlargedText
    ]}>{children}</SettingsContext.Provider>
}

export default SettingsContext
