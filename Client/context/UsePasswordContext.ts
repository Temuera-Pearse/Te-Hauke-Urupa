// import React, { createContext, useContext, useState } from 'react';

// // Define the PasswordContextValue interface
// interface PasswordContextValue {
//   isPasswordEntered: boolean;
//   setIsPasswordEntered: React.Dispatch<React.SetStateAction<boolean>>;
// }

// // Create the PasswordContext
// const PasswordContext = createContext<PasswordContextValue | undefined>(undefined);

// // Create the PasswordProvider component
// function PasswordProvider({ children }: { children: React.ReactNode }) {
//   const [isPasswordEntered, setIsPasswordEntered] = useState(false);

//   const contextValue: PasswordContextValue = {
//     isPasswordEntered,
//     setIsPasswordEntered,
//   };

//   return (
//     <PasswordContext.Provider value={contextValue}>
//       {children}
//     </PasswordContext.Provider>
//   );
// }

// // Create the usePasswordContext hook
// function usePasswordContext(): PasswordContextValue {
//   const context = useContext(PasswordContext);
//   if (!context) {
//     throw new Error('usePasswordContext must be used within a PasswordProvider');
//   }
//   return context;
// }

// // Export the PasswordProvider and usePasswordContext
// export { PasswordProvider, usePasswordContext };
