import { createContext, useState } from 'react'


export const AccountContext = createContext()

export function AccountProvider({ children }) {
    const [accountBool, setAccountBool] = useState(false);

    return (
        <AccountContext.Provider value={{ accountBool, setAccountBool }}>
            {children}
        </AccountContext.Provider>
    )


}