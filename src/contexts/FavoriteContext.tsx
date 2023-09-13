import React, { createContext, useState, ReactNode } from "react";
import { CartItem } from "./CartContext";

interface Props {
    children: ReactNode;
}

interface FavoriteContextType {
    favorite: CartItem[];
    addItemFavorite: (newItem: CartItem) => void;
    removeFavorite: (id: string) => void;
    isFavorite: (id: string) => boolean;
}

export const FavoriteContext = createContext<FavoriteContextType>({
    favorite: [],
    addItemFavorite: () => {},
    removeFavorite: () => {},
    isFavorite: () => false,
});

export default function FavoriteProvider({ children }: Props) {
    const [favorite, setFavorite] = useState<CartItem[]>([]);

    function isFavorite(id: string) {
        const item = favorite.find((item) => item.id === id);
        return !!item;
    }

    function addItemFavorite(newItem: any) {
        setFavorite([...favorite, newItem]);
    }

    function removeFavorite(id: string) {
        setFavorite(favorite.filter((item) => item.id !== id));
    }

    return (
        <FavoriteContext.Provider
        value={{
            favorite,
            addItemFavorite,
            removeFavorite,
            isFavorite,
        }}
        >
        {children}
        </FavoriteContext.Provider>
    );
}