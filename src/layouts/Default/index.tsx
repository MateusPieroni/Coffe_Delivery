import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { GlobalStyle } from "../../styles/global";


export function Default(){
  return(
    <>

      <GlobalStyle/>

      <Header/>

      <Outlet/>
      
    </>
  )
}