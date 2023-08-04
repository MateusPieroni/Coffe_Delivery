import { OrderBox } from "../../components/OrderBox";
import { PayBox } from "../../components/PayBox";
import { SendBox } from "../../components/SendBox";
import {Container, Main} from "./styles";


export function Checkout(){
    return(
        <>
            
            <Main>

                <Container>

                    <h1>Complete seu pedido</h1>

                    <SendBox/>

                    <PayBox/>

                </Container>

                <Container>

                    <h1>Cafés selecionados</h1>

                   <OrderBox/>

                </Container>

            </Main>
        </>
    )
}