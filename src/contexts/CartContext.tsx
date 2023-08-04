import { createContext, useEffect, useState} from "react";
import axios from "axios";


export type CartCoffe = {
  image: string,
  name: string,
  price: string,
};

export type AdressType ={
  cep: string,
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf: string,
  ibge: string,
  gia: string,
  ddd: string,
  siafi: string
}

type CartContextType = {
  productNumber: number;
  updateProductNumber: () => void;
  cart: CartCoffe[];
  mergedCart: CartCoffe[];
  addToCart: (image: string , name: string , price: string, quantity: number) => void;
  removeFromCart: (name: string, quantity: number) => void;
  mergeCart: () => void
  adress: AdressType;
  updateAdress: (cep: string) => void
  payButton: string
  updatePayButton: (name: string) => void
  houseNumber: string
  updateHouseNumber: (number: string) => void
  firstCondition: boolean
  secondCondition: boolean
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {

  const [productNumber , setProductNumber] = useState(0)

  const [cart , setCart] = useState<CartCoffe[]>([])

  const [mergedCart, setMergedCart] = useState<CartCoffe[]>([])

  const [adress, setAdress] = useState({ 
    "cep": "",
    "logradouro": "",
    "complemento": "",
    "bairro": "",
    "localidade": "",
    "uf": "",
    "ibge": "",
    "gia": "",
    "ddd": "",
    "siafi": ""
  });

const [payButton , setPayButton] = useState('')

const [houseNumber, setHouseNumber] = useState('')

const [firstCondition, setFirstCondition] = useState(false)

const [secondCondition, setSecondCondition] = useState(false)

  function updateProductNumber(){
    
    const productSize = cart.length

    setProductNumber(productSize)

  }

  function addToCart(image: string , name: string , price: string, quantity: number){

      const newCoffe = Array.from({length: quantity} , () => ({     
        image: image,
        name: name,
        price: price,
      })); 
  
      setCart([...cart , ...newCoffe])
    
  }

  function mergeCart(){
    
    const coffeArray: CartCoffe[] = [...cart];

    const mergedArray: CartCoffe[] = [];

    coffeArray.forEach(coffe => {

      const existingItem = mergedArray.findIndex(item => item.name === coffe.name);

      if (existingItem !== -1){
        mergedArray[existingItem].price = (
          parseFloat(mergedArray[existingItem].price) + parseFloat(coffe.price)).toFixed(2)
      } else {
        mergedArray.push({...coffe})
      }
      
    })
    
    setMergedCart(mergedArray)
  }

  function removeFromCart(name: string, quantity: number){

    const coffeArray: CartCoffe[] = [...cart];

    const coffeName = coffeArray.findIndex(coffe => coffe.name === name)

    if (coffeName !== -1) {
      coffeArray.splice(coffeName, quantity)
    } 

    setCart(coffeArray)

  }
  
  const updateAdress = async (cep: string) => {

    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        setAdress(response.data)
        setFirstCondition(true)
    } catch (error) {
        console.log("Erro ao buscar endereço:", error);
        setAdress({
            "cep": "",
            "logradouro": "",
            "complemento": "",
            "bairro": "",
            "localidade": "",
            "uf": "",
            "ibge": "",
            "gia": "",
            "ddd": "",
            "siafi": ""
        });
    }
    
}

  function updatePayButton(name: string){

    setPayButton(name)

    setSecondCondition(true)
    
  }

  function updateHouseNumber(number: string){

    setHouseNumber(number)

  }

  useEffect(() => {
    mergeCart()
  }, [cart])

  useEffect(() =>{
    updateProductNumber()
  }, [cart])

  /*useEffect(() =>{
    console.log(mergedCart)
  }, [mergedCart])*/

  return(
    <CartContext.Provider value={{productNumber , updateProductNumber , cart , addToCart , removeFromCart, mergeCart, mergedCart, adress, updateAdress, payButton, updatePayButton, houseNumber, updateHouseNumber, firstCondition, secondCondition}}>
      {children}
    </CartContext.Provider>
  )
}

/*
  const [mergedCart , setMergedCart] = useState(mergeCoffes())

  function mergeCoffes() {
    const allCoffeNames: string[] = []; // Aqui tem que ter todos os nomes de cafe
    const mergedCartCoffes: CartCoffe[] = [];
    allCoffeNames.forEach((name) => {
      const filterByName = cart?.filter(el => el.name === name); // encontrando todos os cafes com o mesmo na lista de cart
      if (filterByName.length > 0) {
          const coffe = filterByName[0];
          delete coffe.id;
          mergedCartCoffes.push({...coffe, quantity: filterByName.length});
      }
    });
  
    return mergedCartCoffes;
  }



    useEffect(() =>{
    console.log(cart)
  }, [cart])



      let totalQuantity = quantity*parseFloat(price)

    const quantityString = totalQuantity.toString()

    const mergedArray: CartCoffe[] = [...mergedCart]

    const existingItem = mergedArray.findIndex(item => item.name === name);

    if (existingItem !== -1){
      mergedArray[existingItem].price = (
        (parseFloat(mergedArray[existingItem].price) - parseFloat(quantityString)).toFixed(2)
      )
    }

    setMergedCart(mergedArray)
  */