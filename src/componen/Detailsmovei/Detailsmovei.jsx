import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from "react-helmet";
import Sli from '../sli/Sli';

export default function Detailsmovei() {
   
    const [dataperson, setataPerson] = useState([])


    async function getDataperson() {

        let { data } = await axios.get("https://api.themoviedb.org/3/discover/person?api_key=59b0516957d5f8a1dd764c736e17d853")
        setataPerson(data.results)
    }


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


    let {id}=useParams()

    const [details, setDetails] = useState((""))

    

 async   function detailsmovei(){
     let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=59b0516957d5f8a1dd764c736e17d853`)
     setDetails(data)
    }
    

useEffect(() => {
    detailsmovei()
    getDataperson()
}, [])

  return (
      <div className='bg-black'>
          <Helmet>
              <title>Details Movei</title>
          </Helmet>

          <div className='container text-white pt-5'>
              <div className='row'>
                  <div className='col-lg-6'>
                      <div className='justify-content-center'>
                          <img src={"https://image.tmdb.org/t/p/w500/" + details.poster_path} alt="" className='w-50 mx-auto border  border-warning borde ' />

</div>
                  </div>
                  <div className='col-lg-6 pt-3'>
                      <h4 >{details.title}</h4>
                      


                      {details?.genres?.map((x) =>
                          <button className='btn btn-outline-warning text-white m-3' >{x.name}</button>

                      )}
                      
                      <p>{details.overview}</p>
                  </div>
              </div>
          </div>

          <div className='container py-5'>
              <h3 className='text-white mb-3'>Media Cast</h3>


              <Slider {...settings}>
                  {dataperson.map((x) =>

                      <div className='justify-content-center'>
                          <img src={"https://image.tmdb.org/t/p/w500/" + x.profile_path} alt="" className='w-75  mx-auto  borde' />
                          <p className='text-center text-white'>{x.title}</p>


</div>
                  )}
              </Slider>
              


          </div>
<div className='container'>
              <h3 className='text-white mb-3'>Videos</h3>
              <div className='row'>
<div className='col-lg-12'>
                      <img src="video.jpg" alt="" className='w-50 h-50 ' />

</div>
                  
              </div>

</div>



          <Sli />


    </div>
  )
}
