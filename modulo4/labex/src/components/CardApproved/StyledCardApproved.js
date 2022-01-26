import styled from "styled-components";
import {AiFillRocket} from 'react-icons/ai'

export const ApprovedList = styled.ul`
    width: max-content;
    height: max-content;
    padding: 20px;
    justify-content: space-around;
    display: flex;
`
export const ListItem = styled.li`
    color: #ffffff;
    display: flex;
    align-items: center;
`
export const ApprovedIcon = styled(AiFillRocket)`
    margin-right: 4px;
    color: lightgreen;
`