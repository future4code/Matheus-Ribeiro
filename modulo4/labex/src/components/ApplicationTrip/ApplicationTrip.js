import React from "react";
import {
  ContainerApplication,
  ContainerFormApplcation,
} from "./StyledApplicationTrip";
import FormApplication from "../FormApplication/FormApplication";
import SecondaryTitle from "../SecondaryTitle/SecondaryTitle";
import CardPhrase from "../CardPhrase/CardPhrase";


const ApplicationTrip = () => {
  return (
    <ContainerApplication>
      <CardPhrase />
      <ContainerFormApplcation>
        <SecondaryTitle text="INSCREVA-SE" />
        <FormApplication />
      </ContainerFormApplcation>
    </ContainerApplication>
  );
};

export default ApplicationTrip;
