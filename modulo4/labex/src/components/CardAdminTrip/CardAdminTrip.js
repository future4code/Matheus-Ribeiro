import React from 'react';
import { AdminTextInfo, CardAdminTripContainer, ContainerAdminInfoTrip, DeleteIcon} from './StyledCardAdminTrip';

const CardAdminTrip = ({name, deleteTrip, tripId, goToTripDetails}) => {
  return <CardAdminTripContainer>
    <ContainerAdminInfoTrip
    onClick={() => goToTripDetails(tripId)}
    >
      <AdminTextInfo>
        {name}
      </AdminTextInfo>
      <DeleteIcon size={32}
        onClick={() => deleteTrip(tripId) }
      />
    </ContainerAdminInfoTrip>
  </CardAdminTripContainer>;
};

export default CardAdminTrip;
