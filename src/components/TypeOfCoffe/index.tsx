import { useContext, useState } from 'react'
import { Cart, Content, Description, Footer, Name, Price, Type, Container, Counter, Minus, Plus } from './style'
import { CartContext } from '../../contexts/CartContext'

interface CoffeProps{
    image: string
    type1: string
    type2: string
    type3: string
    name: string
    description: string
    price: string
}

export function TypeOfCoffe({image, type1, type2, type3, name, description, price}: CoffeProps){

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
    
    function addToCart(image: string , name: string , price: string, quantity: number){
        cartContext?.addToCart(image, name, price, quantity)
    }
    
    return(

        <Container>
                    
        <img src={image} alt="" />

        <Type>

            {type1 &&(
                <div>
                    {type1}
                </div>
            )
            }    

            {type2 &&(        
                <div>
                    {type2}
                </div>
            )}

            {type3 &&(        
                <div>
                    {type3}
                </div>
            )}


        </Type>

        <Content>

            <Name>{name}</Name>

            <Description>{description}</Description>

        </Content>

        <Footer>

            <p>R$</p>
            <Price>{price}</Price>

            <Counter>
                <Minus onClick={() => updateNumber(0)}/>
                <span>{number}</span>
                <Plus onClick={() => updateNumber(1)}/>
            </Counter>

            <Cart onClick={() => addToCart(image, name, price, number)}/>
            
        </Footer>

    </Container>
    )
}