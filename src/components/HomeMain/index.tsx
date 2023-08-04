import { Main, Container, Row, Infolist, Item, PrimarySpan, SecundarySpan, Text } from "./style";
import BigCoffe from '../../assets/big-coffe.svg'
import Cart from '../../assets/orange-cart-icon.svg'
import Box from '../../assets/box-icon.svg'
import Clock from '../../assets/clock-icon.svg'
import Coffe from '../../assets/purple-coffe-icon.svg'

export function HomeMain(){
    return(
        
        <Main>

        <Container>

            <Text>

                <PrimarySpan>Encontre o café perfeito para qualquer hora do dia.</PrimarySpan>

                <SecundarySpan>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</SecundarySpan>

            </Text>

            <Infolist>

                <Row>

                    <Item>
                        <img src={Cart} alt="" />
                        <span>Compra simples e segura</span>
                    </Item>

                    <Item>
                        <img src={Box} alt="" />
                        <span>Embalagem mantém o café intacto</span>
                    </Item>
                    
                </Row>

                <Row>

                <Item>
                        <img src={Clock} alt="" />
                        <span>Entrega rápida e rastreada</span>
                </Item>

                <Item>
                        <img src={Coffe} alt="" />
                        <span>O café chega fresquinho até você</span>
                </Item>

                </Row>

            </Infolist>

        </Container>

        <img src={BigCoffe} alt="" />

    </Main>
    )
}