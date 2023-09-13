import React, { createContext, useState, ReactNode } from 'react'
import { CartItem } from './CartContext'

interface Props {
    children: ReactNode;
}

interface FavoriteContextType {
    favorite: CartItem[];
    addItemFavorite: (newItem: CartItem) => void;
    removeFavorite: (id: number) => void;
    isFavorite: (id: number) => boolean
}

export const FavoriteContext = createContext<FavoriteContextType>({
    favorite: [],
    addItemFavorite: () => {},
    removeFavorite: () => {},
    isFavorite: () => false
})


export default function FavoriteProvider( {children}: Props) {
    const [favorite, setFavorite] = useState<CartItem[]>([])

    function isFavorite(id: number) {
        const item = favorite.find(item => item.id === id)
        return !!item
    }   

    function addItemFavorite(newItem: any) {
        setFavorite([...favorite, newItem])
    }

    function removeFavorite(id: number) {
        setFavorite(favorite.filter(item => item.id !== id))
    }

    return(
        <FavoriteContext.Provider value={{
            favorite,
            addItemFavorite,
            removeFavorite,
            isFavorite
        }}>
            {children}
        </FavoriteContext.Provider>
    )
}
