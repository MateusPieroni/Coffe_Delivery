import styled from 'styled-components'
import Minusimg from "../../assets/minus-simbol.svg";
import Plusimg from "../../assets/plus-simbol.svg";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Div = styled.div`
    display: flex;
    gap: 1.25rem;
    align-items: start;
    padding: 0.5rem, 0.25rem, 0.5rem, 0.25rem;

    img{
        width: 4rem;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Buttons = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-top: 0.5rem;
`;

export const Name = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: #403937;
`;

export const Price = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
    color: #574F4D;
`;

export const Image = styled.img`
    width: 4rem;
    height: 4rem;
`;

export const Counter = styled.div`
    height: 2rem;
    width: 4.5rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    background-color: #E6E5E5;
    border-radius: 0.375rem;
    margin-right: 0.5rem;

    span{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
        color: #272221; 
    }
`;

export const Plus = styled.button`
    background-image: url(${Plusimg});
    background-position: center;
    width: 0.875rem;    
    height: 0.875rem;
    border: 0;
    background-color: #E6E5E5;
`;

export const Minus = styled.button`
    background-image: url(${Minusimg}); 
    background-position: center;
    width: 0.875rem;    
    height: 0.875rem; 
    border: 0;
    background-color: #E6E5E5;
`;

export const RemoveButton = styled.div`
    width: 5.68rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E6E5E5;
    border-radius: 0.375rem;
    border: 0;
    gap: 0.25rem;

    span{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 130%;
        color: #574F4D; 
        margin-right: 0.5rem;  
    }

    img{
        width: 1rem;
        height: 1rem;
    }
`