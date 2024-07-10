import React from 'react'
// import { IoCaretForwardCircleSharp } from 'react-icons/fa'
import { IoMdPlay } from "react-icons/io"
import img1 from '../img/hero-bg.jpg'
import img2 from '../img/home3.jpg'
import img3 from '../img/home2.jpg'

export default function Slid() {
  return (
    <div className='bg-black'>
      <div className="carousel slide  "
        id="carouselDemo"
        data-bs-wrap="true"
        data-bs-ride="carousel">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src={img1}alt="" className='w-100 position-relative w- ' />
            {/* <div className='w-100 h-100 position-absolute top-0  back'>

            </div> */}
              <div class="carousel-caption">
              <p class="hero-subtitle">Filmlane</p>
 
              <h4 className='h1 hero-title'>Unlimited <strong>Movie</strong>, TVs Shows, & More.</h4>
              {/* <button class="btnn"> <FaYoutube className='icons youtube fs-3'/> PLAY</button> */}
              <button className="btnn ">
                <IoMdPlay />
                <span>Watch now</span>
              </button>
              </div>
          </div>

          <div className="carousel-item "
            data-bs-interval="2000">
            <img src={img2} alt="" className='w-100 w-' />
            <div className='w-100 h-100 position-absolute top-0  back'>

            </div>
              <div class="carousel-caption">
              <p class="hero-subtitle">Filmlane</p>

              <h4 className='h1 hero-title'>Unlimited <strong>Movie</strong>, TVs Shows, & More.</h4>
              <button className="btnn ">
                <IoMdPlay />
                <span>Watch now</span>
              </button>

              </div>
          </div>

          <div className="carousel-item ">
            <img src={img3} alt="" className='w-100 position-relative w-  ' />
            <div className='w-100 h-100 position-absolute top-0  back'>

            </div>
              <div className="carousel-caption">
              <p class="hero-subtitle">Filmlane</p>

              <h4 className='h1 hero-title'>Unlimited <strong>Movie</strong>, TVs Shows, & More.</h4>
              <button className="btnn ">
                <IoMdPlay />
                <span>Watch now</span>
              </button>

              </div>
          </div>

        </div>

        <button className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselDemo"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next"
          type="button"
          data-bs-target="#carouselDemo"
          data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

        <div className="carousel-indicators">
          <button type="button" className="active"
            data-bs-target="#carouselDemo"
            data-bs-slide-to="0">
            <img src={img1} />
          </button>

          <button type="button"
            data-bs-target="#carouselDemo"
            data-bs-slide-to="1">
            <img src={img2} />
          </button>

          <button type="button"
            data-bs-target="#carouselDemo"
            data-bs-slide-to="2">
            <img src={img3} />
          </button>
        </div>

      </div>










        




    </div>
  )
}

