import React from "react";
import styled from "styled-components";

const MenuItem = styled.li`
  margin-bottom: ${props => props.styleItem.gap || "20px" };
  text-align: ${props => props.styleItem.align || "center" };
`;

const Menu = styled.ul`
  margin: auto;
  list-style-type: none;
  padding: 0;
  padding-top: ${props => props.paddingTop || "50px"};
  height: ${props => props.height || "auto"};
  min-height: 40%;
`;

const ListGroup = ({ data, styleItem={}, style={}, renderItem }) => {
  return (
    <Menu height={style.height} paddingTop={style.paddingTop}>
      {data.map((m, idx) => (
        <MenuItem key={idx} styleItem={styleItem}>
          {renderItem(m)}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default ListGroup;
