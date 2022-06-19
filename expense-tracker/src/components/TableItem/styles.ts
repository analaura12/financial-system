import styled from "styled-components";

export const TableLine = styled.tr``;
export const TableColumn = styled.td`
    padding: 10px 0;
    text-align: center;
`;
export const Category = styled.div<{color?: string}>`
    display: inline-block;
    padding: 5px 10px;
    color: #fff;
    border-radius: 5px;
    background-color:${ props => props.color ? `${props.color}` : '#000' };
`;

export const Value = styled.div<{color?: string}>`
    color: ${props => props.color ? `${props.color}` : '#000'}
`;