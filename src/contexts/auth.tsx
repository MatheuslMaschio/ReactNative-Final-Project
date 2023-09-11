import React, { createContext, ReactNode, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    UserCredential,
} from "firebase/auth";
import { appAuth } from "../services/firebase";
import { useNavigation } from "@react-navigation/native";
import { TabTypes } from "../routes/app.routes";
import { StackTypes } from "../routes/auth.routes";

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthContextProps {
    signUp: (email: string, password: string, name: string) => Promise<void>;
    signIn: (email: string, password: string) => Promise<void>;
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
    const navigationHome = useNavigation<TabTypes>();

    const signUp = async (
        email: string,
        password: string,
        name: string
    ): Promise<void> => {
        setLoadingAuth(true);
        try {
            await createUserWithEmailAndPassword(appAuth, email, password);
            setLoadingAuth(false);
            navigation.navigate("SignIn");
        } catch (error) {
            console.error("ERRO AO CADASTRAR", error);
            setLoadingAuth(false);
        }
    };

    const signIn = async (email: string, password: string): Promise<void> => {
            setLoadingAuth(true);
        try {
            const userCredential: UserCredential = await signInWithEmailAndPassword(
                appAuth,
                email,
                password
            );
            const signedUser = userCredential.user;
            setUser({
                id: signedUser.uid,
                name: signedUser.displayName || "",
                email: signedUser.email || "",
            });
            setLoadingAuth(false);
            navigationHome.navigate("Home"); 
        } catch (error) {
            console.error("ERRO AO LOGAR", error);
            setLoadingAuth(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{ signed: !!user, user, signUp, signIn, loadingAuth }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
