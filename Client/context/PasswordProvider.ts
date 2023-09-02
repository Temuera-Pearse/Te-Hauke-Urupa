// import { useState, createContext } from 'react'
// import usePasswordContext from './UsePasswordContext'
// import { PasswordContext } from './UsePasswordContext'

// interface PasswordContextValue {
//   isPasswordEntered: boolean
//   setIsPasswordEntered: React.Dispatch<React.SetStateAction<boolean>>
// }

// function PasswordProvider({ children }: { children: React.ReactNode }) {
//   const [isPasswordEntered, setIsPasswordEntered] = useState(false)

//   const contextValue: PasswordContextValue = {
//     isPasswordEntered,
//     setIsPasswordEntered,
//   }

//   return (
//     <PasswordContext.Provider value={contextValue}>
//       {children}
//     </PasswordContext.Provider>
//   );
// }

// export default PasswordProvider
