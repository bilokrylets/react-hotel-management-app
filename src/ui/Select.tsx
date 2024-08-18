import styled from 'styled-components';

type Props = {
  options: {
    value?: string;
    label: string;
  }[];
  value: string;
  type?: string;
  onChange?: (e: any) => void;
};

function Select({ options, value, type, onChange }: Props) {
  return (
    <StyledSelect type={type} value={value} onChange={onChange}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === 'white'
        ? 'var(--color-grey-100)'
        : 'var(--color-grey-300)'};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

export default Select;
