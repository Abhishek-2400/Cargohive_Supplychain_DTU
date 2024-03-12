import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'
import { faIndustry, faPlaneDeparture, faShip, faTrainSubway, faTruckField, faWarehouse } from '@fortawesome/free-solid-svg-icons'
import video2 from '../../videos/video1.mp4'
import { Link } from 'react-router-dom'
const About = () => {

  return (
    <>
      <div className="about-page">
        <video src={video2} autoPlay loop muted></video>
        <div className="text-zone">
          <h1 className='text-about'>

            ABOUT US
          </h1>
          <br />  <br />
          <p className='top_para'>
            We are using innovative technologies to improve the efficiency and transparency of supply chain management, which can benefit businesses by helping them better serve their customers and stakeholders.
            We have designed an approach to help small startup ventures in automating their Supply Chain in order to maximise their profit. Our model includes various Supply Chain Services like Demand Projection and Analysis, Product Lineage Tracking and a marketplace to connect ventures to the wholesale Sellers.
          </p>

        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faTruckField} />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faWarehouse} />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faPlaneDeparture} />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faShip} />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faTrainSubway} />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faIndustry} />
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default About
