import React from 'react'
import { ContainerApplication, ContainerFormApplcation } from './StyledApplicationTrip'
import FormApplication from '../FormApplication/FormApplication'
import { useForm } from '../../hooks/useForm'
import { useRequestData } from '../../hooks/useRequestData'
import { countries } from '../../constants/countries'
import SecondaryTitle from '../SecondaryTitle/SecondaryTitle'
import CardPhrase from '../CardPhrase/CardPhrase'

const ApplicationTrip = () => {

  const [form, onChange, clearForm] = useForm({
    trip: "",
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  })

  const [tripsData] = useRequestData(`/trips`, {});

  return (
    <ContainerApplication>
      <CardPhrase/>
      <ContainerFormApplcation>
        <SecondaryTitle
        text='Increva-se para uma viagem'
        />
        <FormApplication
          tripList={tripsData.trips}
          countriesList={countries}
          form={form}
          onChange={onChange}
          clearForm={clearForm}
        />
      </ContainerFormApplcation>
    </ContainerApplication>
  )
}

export default ApplicationTrip
