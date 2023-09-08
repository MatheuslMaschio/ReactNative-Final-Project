import React, { createContext, ReactNode, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from '../services/firebase';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../routes/auth.routes';

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthContextProps {
    signUp: (email: string, password: string, name: string) => void;
    signIn: (email: string, password: string) => void;
    loadingAuth: boolean;
    signed: boolean;
    user: User | null; 
}

export const AuthContext = createContext<AuthContextProps>({
    signUp: () => Promise.resolve(),
    signIn: () => Promise.resolve(),
    loadingAuth: false,
    signed: false,
    user: null,
});

interface Props {
    children: ReactNode;
}



function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<User | null>(null); 
    const [loadingAuth, setLoadingAuth] = useState<boolean>(false);

    const navigation = useNavigation<StackTypes>();

    async function signUp(email: string, password: string, name: string) {
        const auth = getAuth(firebaseApp);
        setLoadingAuth(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth, 
                email, 
                password
            );
    
            const userData = {
                id: userCredential.user.uid,
                name,
                email,
            };
            
            setUser(userData);
            setLoadingAuth(false);
            navigation.navigate('SignIn');
    
        } catch (err) {
            console.log("ERRO AO CADASTRAR", err);
            setLoadingAuth(false);
        }
    }
    async function signIn(email: string, password: string) {
        const auth = getAuth(firebaseApp);
        setLoadingAuth(true);
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth, 
                email, 
                password
            );
            const user = userCredential.user;
            
            const userData: User = {
                id: user.uid,
                name: user.displayName || '',
                email: user.email || '',
            };

            setUser(userData);
            setLoadingAuth(false);
        } catch (err) {
            console.log("ERRO AO LOGAR", err);
            setLoadingAuth(false);
        }
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, loadingAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
