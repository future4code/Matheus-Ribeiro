import React from "react";
import {
  AdminTextInfo,
  CardAdminTripContainer,
  ContainerAdminInfoTrip,
  DeleteIcon,
} from "./StyledCardAdminTrip";

const CardAdminTrip = ({ name, deleteTrip, tripId, goToTripDetails }) => {
  return (
    <CardAdminTripContainer>
      <ContainerAdminInfoTrip>
        <AdminTextInfo onClick={() => goToTripDetails(tripId)}>
          {name}
        </AdminTextInfo>
        <DeleteIcon size={24}  onClick={() => deleteTrip(tripId)} />
      </ContainerAdminInfoTrip>
    </CardAdminTripContainer>
  );
};

export default CardAdminTrip;
