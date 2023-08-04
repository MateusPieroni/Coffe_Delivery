import { Header } from "../../components/Header";
import { Container, TopTitle, Top, TopSpan, Content, Image, Info, Div, Icon, Strong, Span, Text } from "./styles";
import Pin from '../../assets/purple-pin-circle.svg'
import Clock from '../../assets/clock-icon.svg'
import Money from '../../assets/money-icon.svg'
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Success(){

  const cartContext = useContext(CartContext)

  return(
    <>

      <Container>

        <Top>

          <TopTitle>Uhu! Pedido confirmado</TopTitle>

          <TopSpan>Agora é só aguardar que logo o café chegará até você</TopSpan>

        </Top>

        <Content>

          <Info>

            <Div>

              <Icon src={Pin}/>

              <Text>

                <Span>Entrega em &nbsp;<Strong> {cartContext?.adress.logradouro}, {cartContext?.houseNumber}</Strong></Span>              

                <Span>{cartContext?.adress.bairro} - {cartContext?.adress.localidade}, {cartContext?.adress.uf}</Span>

              </Text>

            </Div>

            <Div>

              <Icon src={Clock}/>

              <Text>

                  <Span>Previsão de entrega</Span>

                  <Strong>20 min - 30 min </Strong>

              </Text>

            </Div>

            <Div>

              <Icon src={Money}/>

              <Text>

                  <Span>Pagamento na entrega</Span>

                  <Strong>{cartContext?.payButton}</Strong>

              </Text>

            </Div>

          </Info>

          <Image/>
          
        </Content>

      </Container>
    </>
  )
}