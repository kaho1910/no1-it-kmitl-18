import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const NavLink = styled(Link)`
    padding: 17px;
    margin: 0px;
    &:hover {
        color: #0072ce;
    }
    &.active {
        color: #0072ce;
        border-bottom: 4px solid #0172ce;
    }
`;
