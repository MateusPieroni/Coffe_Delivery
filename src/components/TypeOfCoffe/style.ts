import styled from 'styled-components'
import WhiteCart from '../../assets/cart-white.svg'
import Minusimg from "../../assets/minus-simbol.svg";
import Plusimg from "../../assets/plus-simbol.svg";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem;
    width: 16rem;
    height: 19.375rem;
    background-color: #F3F2F2;
    border-radius: 0.375rem 2.25rem;

    img{
        position: relative;
        bottom: 2.5rem;
    }
`;

export const Type = styled.div`
    display: flex;
    gap: 0.25rem;

    div{
        text-align: center;
        width: 5.06rem;
        background-color: #F1E9C9;
        padding: 0.25rem 0.5rem 0.25rem 0.5rem;
        border-radius: 6.25rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 0.625rem;
        line-height: 130%;
        color: #C47F17;
        position: relative;
        bottom: 2.5rem;
        margin-top: 1rem;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    bottom: 2.5rem;
    margin-top: 1.25rem;
`;

export const Name = styled.span`
    color: #403937;
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
`;

export const Description = styled.span`
    color: #8D8686;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    margin-top: 0.5rem;
`;

export const Footer = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    bottom: 2.5rem;
    margin-top: 2.06rem ;

    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;
        text-align: right;
        color: #574F4D;
        margin-left: 0.25rem;
    }
`;

export const Price = styled.span`
    color: #574F4D;
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;
    text-align: right;
    margin-right: 1.43rem;
`;

export const Cart = styled.button`
    border: 0;
    width: 2.375rem;
    height: 2.375rem;
    background: url(${WhiteCart});
    background-repeat: no-repeat;
    background-color: #4B2995;
    background-position: center;
    border-radius: 0.375rem;
`;

export const Counter = styled.div`
    height: 2.375rem;
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