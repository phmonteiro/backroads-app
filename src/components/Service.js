import React from 'react'

const Service = (props) => {
  const { serviceName, serviceText, icon } = props
  return (
    <article className="service">
      <span className="service-icon"><i className={icon}></i></span>
      <div className="service-info">
        <h4 className="service-title">{serviceName}</h4>
        <p className="service-text">
          {serviceText}
        </p>
      </div>
    </article>
  )
}

export default Service