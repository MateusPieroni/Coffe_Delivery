import { CartContext } from "../../contexts/CartContext";
import { Separator } from "../Separator";
import { Buttons, Container, Content, Counter, Div, Image, Minus, Name, Plus, Price, RemoveButton } from "./styles";
import { useContext, useState } from "react";
import TrashCan from "../../assets/trash-can.svg"

interface OrderProps{
    image: string,
    name: string,
    price: string
}

export function Order({image, name, price}: OrderProps){


    const cartContext = useContext(CartContext);
    
    const [number, setNumber] = useState(0)

    function updateNumber(numberId: number){

        const newNumber = number

        if(numberId === 0 && newNumber > 0){
            setNumber(newNumber - 1)
        }

        if(numberId === 1){
            setNumber(newNumber + 1)
        }
        
    }

    function removeFromCart(name: string, quantity: number){
        cartContext?.removeFromCart(name, quantity)
    }

    return(

        <Container>
                    
            <Div>

                <Image src={image}/>

                <Content>

                    <Name>{name}</Name>

                    <Buttons>

                        <Counter>
                            
                            <Minus onClick={() => updateNumber(0)}/>
                            <span>{number}</span>
                            <Plus onClick={() => updateNumber(1)}/>

                        </Counter>

                        <RemoveButton onClick={() => removeFromCart(name, number)}>

                            <img src={TrashCan}/>
           
                            <span>REMOVER</span>

                        </RemoveButton>

                    </Buttons>

                </Content>

                <Price>R$ {price}</Price>

            </Div>

            <Separator/>

         </Container>
    )
}

