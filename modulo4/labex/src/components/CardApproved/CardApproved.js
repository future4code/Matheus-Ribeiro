import React from "react";
import { ApprovedIcon, ApprovedList, ListItem } from "./StyledCardApproved";

const CardApproved = ({ name }) => {
  return (
    <ApprovedList>
      <ListItem>
        <ApprovedIcon />
        {name}
      </ListItem>
    </ApprovedList>
  );
};

export default CardApproved;
