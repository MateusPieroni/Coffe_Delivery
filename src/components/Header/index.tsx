import { Container, PlaceContainer, SecondContainer } from "./style";
import PinIcon from '../../assets/purple-pin-icon.svg'
import { Link } from "react-router-dom";
import { CartNumber } from "../CartNumber";

export function Header(){

    return(

        <Container>

          <Link to={'/'}/>

            <SecondContainer>

                <PlaceContainer>

                    <img src={PinIcon} alt="Imagem de um Pin" />
                    <span>Itajubá, MG</span>   

                </PlaceContainer>
                
                <Link to={'/checkout'}>
                    
                <CartNumber/>

                </Link>  
                
            </SecondContainer>
            
        </Container>
        
    )
}