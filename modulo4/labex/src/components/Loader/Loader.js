import React from "react";
import { ContainerLoader } from "./StyledLoader";
import RingLoader from "react-spinners/RingLoader";

const Loader = ({ loading }) => {
  return (
    <ContainerLoader>
      <RingLoader color="#03a9f4" size={200} loading={loading} />
    </ContainerLoader>
  );
};

export default Loader;
