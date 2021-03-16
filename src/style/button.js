import styled from "styled-components";
import { COLOR, FONT } from "./style";

export const FooterBtn = styled.div`
  width: 50%;
  height: 100%;
  background: ${COLOR.primary};
  font-size: ${FONT.lg};
  color: ${COLOR.second};
  cursor: pointer;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 15vh;
`;
