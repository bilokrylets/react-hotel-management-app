import styled from 'styled-components';
import GlobalStyles from './styles/globalStyles';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: aliceblue;
`;

const Button = styled.button`
  font-size: 1.5rem;
  padding: 1.2rem 1.5rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-lg);
  background-color: var(--color-brand-600);
  color: var(--color-brand-500);
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>the wild oasis</H1>
        <Button onClick={() => alert('111')}>check</Button>

        <Input type="number" placeholder="number of guests"></Input>
      </StyledApp>
    </>
  );
}

export default App;
