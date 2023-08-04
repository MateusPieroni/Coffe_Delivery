import styled from 'styled-components'
import DeliveryImage from '../../assets/delivery-image.svg'

interface IconProps{
  src: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2rem 10rem;
  margin-top: 1rem;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const TopTitle = styled.div`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;
  color: #C47F17;
`;


export const TopSpan = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
  color: #403937;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  width: 32.875rem;
  height: 16.875rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px  solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #DBAC2C, #8047F8);
  border-radius: 0.375rem 2.25rem;
`;

export const Image = styled.div`
  width: 30.75rem;
  height: 18.3rem;
  background-image: url(${DeliveryImage});
`;

export const Div = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export const Icon = styled.div<IconProps>`
  width: 2rem;
  height: 2rem;
  background-image: url(${props => props.src});
  background-size: cover;
`;

export const Strong = styled.div`
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  line-height: 130%;
  color: #574F4D;
`;

export const Span = styled.div`
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  color: #574F4D;
`;
