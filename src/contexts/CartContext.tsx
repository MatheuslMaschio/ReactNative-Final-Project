import React, {createContext, useState, ReactNode} from "react";

export interface CartItem {
    id: string;
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
    total: number;
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    addItemCart: () => {},
    removeItemCart: () => {},
    total: 0, 
});

interface Props {
    children: ReactNode;
}


function CartProvider({ children }: Props) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [total, setTotal] = useState(0);
    
    function addItemCart(newItem: any) {
        const indexItem = cart.findIndex(item => item.id === newItem.id)
        const amount = newItem.amount || 1;
        
        if(indexItem !== -1){
            //Se entrou aqui add +1 pois já está na lista
            let cartList = cart;
            
            cartList[indexItem].amount = cartList[indexItem].amount + amount;
            
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

            setCart(cartList);
            totalResultCart(cartList);
            
            return;
        }

        const data = {
            ...newItem, 
            amount,
            total: newItem.price * amount
        }
        
        

        setCart(products => [...products, data])
        totalResultCart([...cart, data]);

    }    

    function removeItemCart(product: CartItem) {
        const indexItem = cart.findIndex(item => item.id === product.id)

        if(cart[indexItem]?.amount > 1){
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount - 1;

            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;
            
            setCart(cartList);
            totalResultCart(cartList);
            return;
        }

        const removeItem = cart.filter(item => item.id !== product.id);
        setCart(removeItem);
        totalResultCart(removeItem);
    }

    function totalResultCart(items: CartItem[]) {
        let myCart = items;
        let result = myCart.reduce((acc, obj) => { return acc + obj.total }, 0)

        setTotal(result);
    }


    return(
        <CartContext.Provider
            value={{ 
                cart,
                addItemCart,  
                removeItemCart,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;