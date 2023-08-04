import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Confirmation } from "../Confirmation";
import { Order } from "../Order";
import { Container } from "./styles";
import { v4 as uuidv4 } from 'uuid';



export function OrderBox(){

    const cartContext = useContext(CartContext);

    const cart = cartContext?.mergedCart
    
    return(
            <Container>

                {cart?.map((cart) => {
                    return <Order key={uuidv4()} image={cart.image} name={cart.name} price={cart.price}/>
                } )}

                <Confirmation/>

            </Container>
    )
}