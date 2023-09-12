import React, {createContext, useState, ReactNode} from "react";


export interface CartItem {
    id: number;
    title: string;
    price: number;
    amount: number; 
    total: number;
    description: string;
    category: string;
    categoryId: string;
    image: string;
}

interface CartContextType {
    cart: CartItem[];
    addItemCart: (newItem: CartItem) => void;
    removeItemCart: (product: CartItem) => void;
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    addItemCart: () => {},
    removeItemCart: () => {},
});

interface Props {
    children: ReactNode;
}


function CartProvider({ children }: Props) {
    const [cart, setCart] = useState<CartItem[]>([]);
    
    function addItemCart(newItem: any) {
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if(indexItem !== -1){
            //Se entrou aqui add +1 pois já está na lista
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount + 1;
            
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

            setCart(cartList);
            console.log(cartList);

            return;
        }

        let data = {
            ...newItem, 
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data])

    }

    function removeItemCart(product: CartItem) {
        const indexItem = cart.findIndex(item => item.id === product.id)

        if(cart[indexItem]?.amount > 1){
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount - 1;

            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;
            
            setCart(cartList);
            return;
        }

        const removeItem = cart.filter(item => item.id !== product.id);
        setCart(removeItem);
    }


    return(
        <CartContext.Provider
            value={{ 
                cart,
                addItemCart,  
                removeItemCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;