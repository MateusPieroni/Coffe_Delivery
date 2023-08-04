import { Button, Container, Footer, Header, PrimarySpan, SecundarySpan, Text } from "./styles";
import DollarSing from "../../assets/dollar-sing.svg"
import CreditCard from "../../assets/credit-card.svg"
import DebitCard from "../../assets/debit-card.svg"
import Money from "../../assets/money.svg"
import { useContext} from "react";
import { CartContext } from "../../contexts/CartContext";

export function PayBox(){

    const cartContext = useContext(CartContext)

    return(
        <Container>

            <Header>

                <img src={DollarSing} alt="Imagem de um pin" />

                <Text>

                    <PrimarySpan>Pagamento</PrimarySpan>

                    <SecundarySpan>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</SecundarySpan>

                </Text>

            </Header>

            <Footer>
                
                <Button active={cartContext?.payButton === 'Cartão de crédito'} onClick={() => cartContext?.updatePayButton("Cartão de crédito")}>

                    <img src={CreditCard} alt="Símbolo do Cartão de crédito" />
                    
                    <span>CARTÃO DE CRÉDITO</span>

                </Button>

                <Button active={cartContext?.payButton === 'Cartão de débito'} onClick={() => cartContext?.updatePayButton("Cartão de débito")}>

                    <img src={DebitCard} alt="Símbolo do Cartão de débito" />
                    
                    <span>CARTÃO DE DÉBITO</span>

                </Button>

                <Button active={cartContext?.payButton === 'Dinheiro'} onClick={() => cartContext?.updatePayButton("Dinheiro")}>

                    <img src={Money} alt="Símbolo de dinheiro" />

                    <span>DINHEIRO</span>

                </Button>

            </Footer>

        </Container>
    )
}