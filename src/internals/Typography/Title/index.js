import styled from "styled-components/primitives";

const Title = styled.Text`
  margin-bottom: 1rem;
  line-height: 2.25rem;
  font-size: 2rem;
  font-weight: ${props => (props.bod ? "bold" : "normal")};
  letter-spacing: : -0.0625rem;
`;

export default Title;
