import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 5vh;

  @media (max-width: 768px) {
    width: 50%;
  }

  .left, .right {
    display: flex;
    gap: 10px;
  }

  .left {
    justify-content: flex-start;
  }

  .right {
    justify-content: flex-end;
  }
`;