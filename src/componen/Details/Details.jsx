import React, { useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Details() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToScroll: 2,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    };
    const [dataperson, setataPerson] = useState([])


    async function getDataperson() {

        let { data } = await axios.get("https://api.themoviedb.org/3/discover/person?api_key=59b0516957d5f8a1dd764c736e17d853")
        setataPerson(data.results)
    }





    let { id}=useParams()

const [det, setDet] = useState((""))

    async function getData() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=59b0516957d5f8a1dd764c736e17d853`)
   setDet(data)
    }


useEffect(() => {
  
    getData() 
    getDataperson()
}, [])



  return (
      <div className='bg-black'>
          <Helmet>
              <title>Details Tv</title>
          </Helmet>

          

<div className='container text-white pt-3'>
<div className='row'>
   <div className='col-md-6'>
                      <div className='justify-content-center'>
                          <img src={"https://image.tmdb.org/t/p/w500/" + det.poster_path} alt="" className='w-50 border mx-auto border-warning' />

</div>
   </div>
 <div className='col-md-6'>
    <h4 >{det.name}</h4>
    {det ?.genres?.map((x)=>
        <button className='btn btn-outline-warning m-3'>{x.name}</button>
)}
        <p>{det.overview}</p>
</div>
</div>
</div>
{/* 
<div className='container pt-5'>
              <h3>Media Cast</h3>
<div>

</div>
</div> */}
          <div className='container py-5'>
              <h3 className='text-white mb-3'>Media Cast</h3>


              <Slider {...settings}>
                  {dataperson.map((x) =>

                      <div className='justify-content-center'>
                          <img src={"https://image.tmdb.org/t/p/w500/" + x.profile_path} alt="" className='w-75  mx-auto    ' />
<p className='text-center text-white'>{x.name}</p>
                      </div>
                  )}
              </Slider>



          </div>
          <div className='container'>
              <h3 className='text-white mb-3'>Videos</h3>
              <div className='row'>
                  <div className='col-lg-12'>
                      <img src="video.jpg" alt="" className='w-50 h-50 border ' />
                  </div>

              </div>

          </div>



    </div>
  )
}
