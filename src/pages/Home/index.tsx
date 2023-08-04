import { CoffeList } from "../../components/CoffeList";
import { HomeMain } from "../../components/HomeMain";
import {ShopSection} from "./styles";



export function Home(){
    return(
        
        <>

        <HomeMain/>

        <ShopSection>

            <h1>Nossos cafés</h1>

            <CoffeList/>

        </ShopSection>
        </>

    )
}
