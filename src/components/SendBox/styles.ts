import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 40rem;
    height: 23.25rem;
    background-color: #F3F2F2;
    padding: 2.5rem;
    border-radius: 0.375rem;

    form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;

export const Row = styled.div`
    display: flex;
    gap: 0.75rem;
`;

export const Header = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: start;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PrimarySpan = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: #403937;
`;

export const SecundarySpan = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: #574F4D;
`;

export const InputText = styled.input`
    outline: none;
    background-color: #EDEDED;
    color: #574F4D;
    border: 1px solid #E6E5E5;
    border-radius: 4px;
    padding: 0.75rem;
    width: 12.5rem;

    &::placeholder{
        color: #8D8686;
    }

    ::-webkit-outer-spin-button,   //remover as setas dos input number
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }  
`;

export const StreetImput = styled(InputText)`
    width: 35rem;
`;

export const ComplementImput = styled(InputText)`
    width: 21.75rem;
`;

export const CityImput = styled(InputText)`
    width: 17.25rem;
`;

export const UfImput = styled(InputText)`
    width: 3.75rem;
    text-align: center;
`;