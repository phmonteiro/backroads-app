import React from 'react'
import Title from './Title'
import { services } from '../dataJS'
import Service from './Service'

export const Services = () => {
  return (
    <section className="section services" id="services">
      <Title firstWord="our" secondWord="services" />
      <div className="section-center services-center">
        {services.map(service => {
          const { id, serviceName, serviceText, icon } = { ...service };
          return (
            <Service key={id} serviceName={serviceName} serviceText={serviceText} icon={icon} />
          )
        })}
      </div>
    </section>
  )
}
