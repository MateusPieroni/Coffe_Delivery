import styled from 'styled-components'

export const Body = styled.div`

    a{
        text-decoration: none;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.9375rem;
`;

export const Title = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: #574F4D;
    `;

export const Price = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: #574F4D;
`;

export const Bold = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: #403937;
`;

export const Button = styled.div`
    width: 23rem;
    height: 2.875rem;
    margin-top: 1.5rem;
    background: #DBAC2C;
    padding: 0.75rem 0.5rem;
    text-align: center;
    border-radius: 0.375rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 160%;
    color: #FFFFFF;
`;