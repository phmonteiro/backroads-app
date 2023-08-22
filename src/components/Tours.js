import React from 'react'
import Title from './Title'
import { tours } from '../dataJS'

export const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title firstWord="featured" secondWord="tours" />
      <div className="section-center featured-center">
        {tours.map(tour => {
          const { id, tourName, tourDate, tourText, tourDestination, tourDuration, tourPrice, tourImg } = tour
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={tourImg} className="tour-img" alt="" />
                <p className="tour-date">{tourDate}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tourName}</h4>
                </div>
                <p>
                  {tourText}
                </p>
                <div className="tour-footer">
                  <p>
                    <span><i className="fas fa-map"></i></span> {tourDestination}
                  </p>
                  <p>{tourDuration}</p>
                  <p>{tourPrice}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
