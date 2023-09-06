import React, { createContext, ReactNode} from 'react';

export const AuthContext = createContext({});

interface Props {
    children: ReactNode;
}

function AuthProvider({ children }: Props) {
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;