import { COLORS } from "../../app/constants";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 50px;
  color: ${COLORS.white};

  background: ${COLORS.primary};

  .logo {
    font-weight: 700;
    font-size: 1.4rem;
    font-style: italic;
  }

  nav {
    a {
      margin: 0 10px;
      font-weight: 700;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <div className="logo">Albion Meta</div>
      <nav>
        <Link to="builds">Builds</Link>
        <Link to="builds">Meta</Link>
        <Link to="builds">Login</Link>
      </nav>
    </StyledHeader>
  );
}
