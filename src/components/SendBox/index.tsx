import { Container, CityImput, ComplementImput, Header, InputText, PrimarySpan, Row, SecundarySpan, StreetImput, Text, UfImput } from "./styles"
import Pin from "../../assets/yellow-pin-icon.svg"
import { useContext} from "react";
import { CartContext } from "../../contexts/CartContext";

export function SendBox(){

    const cartContext = useContext(CartContext)

    return(

            <Container>

                <Header>

                    <img src={Pin} alt="Imagem de um pin" />

                        <Text>

                            <PrimarySpan>Endereço de Entrega</PrimarySpan>

                            <SecundarySpan>Informe o endereço onde deseja receber seu pedido.</SecundarySpan>

                        </Text>

                </Header>

                <form action="">

                    <InputText type="number" placeholder="CEP" onBlur={(event) => cartContext?.updateAdress(event.target.value)}></InputText>

                    <StreetImput type="text" placeholder="Rua" defaultValue={cartContext?.adress.logradouro || ""}></StreetImput>

                    <Row>

                        <InputText type="number" placeholder="Número" onChange={(event) => cartContext?.updateHouseNumber(event.target.value)}></InputText>

                        <ComplementImput type="text" placeholder="Complemento"></ComplementImput>
                                    
                    </Row>

                    <Row>

                        <InputText type="text" placeholder="Bairro" defaultValue={cartContext?.adress.bairro || ""}></InputText>

                        <CityImput type="text" placeholder="Cidade" defaultValue={cartContext?.adress.localidade || ""}></CityImput>

                        <UfImput type="text" placeholder="UF" defaultValue={cartContext?.adress.uf || ""}></UfImput>

                    </Row>

                </form>

            </Container>

    )
}