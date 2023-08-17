import { createContext , useState} from "react";

export const RestroNameContext = createContext(null)

const DataContext = ({children}) => {
    const [restroName , setRestroName] = useState("")

    return (
        <RestroNameContext.Provider value={{restroName , setRestroName}}>
            {children}
        </RestroNameContext.Provider>
    )
}

export default DataContext