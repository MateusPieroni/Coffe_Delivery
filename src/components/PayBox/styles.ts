import styled from 'styled-components'

interface ButtonProps{
    active: boolean
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 40rem;
    height: 12.9rem;
    background-color: #F3F2F2;
    padding: 2.5rem;
    border-radius: 0.375rem;

    form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
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

export const Footer = styled.div`
    display: flex;
    gap: 0.75rem;
`;

export const Button = styled.button<ButtonProps>`
    display: flex;
    gap: 0.75rem;
    border: ${(props) => (props.active ? "1px solid #8047F8" : "0")};
    background: ${(props) => (props.active ? "#EBE5F9" : "#E6E5E5")};
    border-radius: 0.375rem;
    width: 11.18rem;
    height: 3.18rem;
    padding: 1rem;

    span{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 160%;
        color: #574F4D;
    };
`;