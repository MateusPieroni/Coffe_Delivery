import { Link } from "react-router-dom";
import { Bold, Container, Button, Price, Title, Body } from "./styles";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Confirmation(){

    const cartContext = useContext(CartContext)

    const cart = cartContext?.cart

    const deliveryPrice = "3.50"

    const [itemsPrice, setItemsPrice] = useState("0")

    const [totalPrice, setTotalPrice] = useState("0")

    function updatePrices() {

        const itemsTotal = cart?.reduce((accumulator , item) =>{
            return (parseFloat(item.price) + parseFloat(accumulator)).toFixed(2)
        }, "0")
     
        setItemsPrice(itemsTotal || "0")
        setTotalPrice((parseFloat(itemsTotal || "0") + parseFloat(deliveryPrice)).toFixed(2))

    }

    useEffect(() =>{
        updatePrices()
    }, [cart])

    return(

        <Body>

            <Container>

                <Title>Total de itens</Title>

                <Price>R$ {itemsPrice}</Price>

            </Container>

            <Container>

                <Title>Entrega</Title>

                <Price>R$ {deliveryPrice}</Price>

            </Container>

            <Container>

                <Bold>Total</Bold>

                <Bold>R$ {totalPrice}</Bold>

            </Container>
            
            <Link to={(cartContext?.firstCondition && cartContext?.secondCondition) ? '/success' : '#'}>

                <Button>

                    CONFIRMAR PEDIDO

                </Button>

            </Link>

        </Body>
    )
}

