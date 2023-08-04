import styled from 'styled-components'
import Cart from '../../assets/cart-yellow.svg'
import CoffeLogo from '../../assets/coffe-logo.svg'

export const Container = styled.header`
    width: 100%;
    padding: 2rem 10rem;
    display: flex;
    justify-content: space-between;

    a{
        text-decoration: none;
        width: 5.31rem;
        height: 2.5rem;
        background: url(${CoffeLogo});
        background-repeat: no-repeat;
        background-position: center;
    }
`;

export const SecondContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;

    a{
        width: 2.375rem;
        height: 2.375rem;
        border: 0;
        background: url(${Cart});
        background-color: #F1E9C9;
        background-repeat: no-repeat;
        background-position: center;
        padding: 1.25rem;
        border-radius: 0.375rem;
    }
`;

export const PlaceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem;
    border-radius: 0.375rem;
    background-color: #EBE5F9;
    gap: 0.46rem;

    span{
        color: #4B2995;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;
    }

    img{
        width: 1.45rem;
        height: 1.45rem;
    }
`;