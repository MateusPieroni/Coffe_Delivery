import { TypeOfCoffe } from "../TypeOfCoffe";
import { Container, Row } from "./style";
import TraditionalEspresso from '../../assets/TypesOfCoffe/traditional-espresso.svg'
import AmericanEspresso from '../../assets/TypesOfCoffe/american-espresso.svg'
import CreamyEspresso from '../../assets/TypesOfCoffe/creamy-espresso.svg'
import IcedEspresso from '../../assets/TypesOfCoffe/iced-espresso.svg'
import CoffeWithMilk from '../../assets/TypesOfCoffe/coffe-with-milk.svg'
import Latte from '../../assets/TypesOfCoffe/latte.svg'
import Capuccino from '../../assets/TypesOfCoffe/capuccino.svg'
import Macchiato from '../../assets/TypesOfCoffe/macchiato.svg'
import Mocaccino from '../../assets/TypesOfCoffe/mocaccino.svg'
import HotChocolate from '../../assets/TypesOfCoffe/hot-chocolate.svg'
import Cuban from '../../assets/TypesOfCoffe/cuban.svg'
import Hawaiian from '../../assets/TypesOfCoffe/hawaiian.svg'
import Arabic from '../../assets/TypesOfCoffe/arabic.svg'
import Irish from '../../assets/TypesOfCoffe/irish.svg'

export function CoffeList(){
    return(

        <Container>

                <Row>

                    <TypeOfCoffe image={TraditionalEspresso} type1="TRADICIONAL" type2="" type3="" name="Expresso Tradicional" description="O tradicional café feito com água quente e grãos moídos." price="9.90"/>
                    <TypeOfCoffe image={AmericanEspresso} type1="TRADICIONAL" type2="" type3="" name="Expresso Americano" description="Expresso diluído, menos intenso que o tradicional." price="9.90"/>
                    <TypeOfCoffe image={CreamyEspresso} type1="TRADICIONAL" type2="" type3="" name="Expresso Cremoso" description="Café expresso tradicional com espuma cremosa." price="9.90"/>
                    <TypeOfCoffe image={IcedEspresso} type1="TRADICIONAL" type2="GELADO" type3="" name="Expresso Gelado" description="Bebida preparada com café expresso e cubos de gelo." price="9.90"/>

                </Row>

                <Row>

                    <TypeOfCoffe image={CoffeWithMilk} type1="TRADICIONAL" type2="COM LEITE" type3="" name="Café com Leite" description="Meio a meio de expresso tradicional com leite vaporizado." price="9.90"/>
                    <TypeOfCoffe image={Latte} type1="TRADICIONAL" type2="COM LEITE" type3=""  name="Latte" description="Uma dose de café expresso com o dobro de leite e espuma cremosa." price="9.90"/>
                    <TypeOfCoffe image={Capuccino} type1="TRADICIONAL" type2="COM LEITE" type3=""  name="Capuccino" description="Bebida com canela feita de doses iguais de café, leite e espuma." price="9.90"/>
                    <TypeOfCoffe image={Macchiato} type1="TRADICIONAL" type2="COM LEITE" type3=""  name="Macchiato" description="Café expresso misturado com um pouco de leite quente e espuma." price="9.90"/>

                </Row>

                <Row>

                    <TypeOfCoffe image={Mocaccino} type1="TRADICIONAL" type2="COM LEITE" type3=""  name="Mocaccino" description="Café expresso com calda de chocolate, pouco leite e espuma." price="9.90"/>
                    <TypeOfCoffe image={HotChocolate} type1="ESPECIAL" type2="COM LEITE" type3=""  name="Chocolate Quente" description="Bebida feita com chocolate dissolvido no leite quente e café." price="9.90"/>
                    <TypeOfCoffe image={Cuban} type1="ESPECIAL" type2="ALCOÓLICO" type3="GELADO" name="Cubano" description="Drink gelado de café expresso com rum, creme de leite e hortelã." price="9.90"/>
                    <TypeOfCoffe image={Hawaiian} type1="ESPECIAL" type2="" type3="" name="Havaiano" description="Bebida adocicada preparada com café e leite de coco." price="9.90"/>

                </Row>

                <Row>

                    <TypeOfCoffe image={Arabic} type1="ESPECIAL" type2="" type3="" name="Árabe" description="Bebida preparada com grãos de café árabe e especiarias." price="9.90"/>
                    <TypeOfCoffe image={Irish} type1="ESPECIAL" type2="ALCOÓLICO" type3="" name="Irlandês" description="Bebida a base de café, uísque irlandês, açúcar e chantilly." price="9.90"/>

                </Row>

            </Container>
    )
}