import { useContext } from "react";
import { Container } from "./styles";
import { CartContext } from "../../contexts/CartContext";


export function CartNumber(){

  const cartContext = useContext(CartContext);

  return(

    <>

      <Container>
        
        <span>{cartContext?.productNumber}</span>

      </Container>

     </>
  )
}