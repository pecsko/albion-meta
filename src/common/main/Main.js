import styled from "styled-components";
import { COLORS } from "../../app/constants";

export default function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

const StyledMain = styled.div`
  height: calc(100vh - 50px);
  background: ${COLORS.secondary};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  .content {
  }
`;
