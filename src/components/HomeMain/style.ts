import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
    padding: 5.875rem 10rem;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const PrimarySpan = styled.span`
    color: #272221;
    width: 36.75rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
`;

export const SecundarySpan = styled.span`
    width: 36.75rem;
    color: #403937;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
`;

export const Infolist = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`;

export const Row = styled.div`
    display: flex;
    gap: 2.5rem;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span{
        font-family: 'Roboto', sans-serif;
        color: #574F4D; 
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
    }
`;