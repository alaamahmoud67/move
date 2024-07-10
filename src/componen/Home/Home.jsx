import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Helmet } from "react-helmet";
import { IoCaretForwardCircleSharp, IoList } from "react-icons/io5";
import { IoMdPlay } from "react-icons/io"
import ReactLoading from 'react-loading';
import img1 from '../img/rayaan.jpeg'

import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slid from '../slider/Slid';
import Sli from '../sli/Sli';
export default function Home() {
  // const [loding, setLoding] = useState(true)
// useEffect(() => {
  

// const  fakeda =() => {
//     setTimeout(()=>{
//       setLoding(false)
//     },4000)
//   }


//   fakeda()
// }, [])
   
  
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 3000,
  //   autoplaySpeed: 3000,
  //   cssEase: "linear"
  // };




  const [datamovei, setatamovei] = useState([])
  const [datatv, setataTv] = useState([])
  const [dataperson, setataPerson] = useState([])

  async  function getDatamovei(){

    let { data } = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=59b0516957d5f8a1dd764c736e17d853")
    setatamovei(data.results)
  }


  async function getDatatv() {

    let { data } = await axios.get("https://api.themoviedb.org/3/discover/tv?api_key=59b0516957d5f8a1dd764c736e17d853")
    setataTv(data.results)
  }

  async function getDataperson() {

    let { data } = await axios.get("https://api.themoviedb.org/3/discover/person?api_key=59b0516957d5f8a1dd764c736e17d853")
    setataPerson(data.results)
  }

 

  useEffect(() => {
    getDatamovei()
    getDatatv()  
    getDataperson()
  }, [])
  
  // {
  //   loding?<Loding/>:()
  // }
  return (
    < div className='bg-black' >

{/* {
         <div className='container justify-content-center d-flex pp'>
          <ReactLoading type={"spin"} color={"hsl(57, 97%, 45%)"} height={580} width={100} />
        </div>
: */}

<div>



            <Slid />








            <div className='background  bg-black  ' >
              <div className='container '>
                <div className='row '>
                  <div className='col-md-6     '>
                    <div className='m  mt-lg-3'>
                      <img src={img1} alt="" className='w-75 h-50 object-fit-cover rounded-2   img-fluid' />

                    </div>
                  </div>
                  <div className='col-md-6  mt-md-5'>
                    <h3 className='h3 text-white fw-bolder'>Raya and the Last Dragon</h3>
                    <div className=' d-lg-flex '>
                      <button type="button" className="btn btn-outline-warning rounded-5 text-white my-4 mx-1">Rating: PG</button>
                      <button type="button" className="btn btn-outline-warning rounded-5 text-white my-4 mx-1">Rating: PG</button>
                      <button type="button" className="btn btn-outline-warning rounded-5 text-white my-4 mx-1">Rating: PG</button>
                      <button type="button" className="btn btn-outline-warning rounded-5 text-white my-4 mx-1">Rating: PG</button>
                      <button type="button" className="btn btn-outline-warning rounded-5 text-white my-4 mx-1">Rating: PG</button>

                    </div>
                    <p className='text-white card-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
                      sapiente error amet iste perferendis doloremque fugiat soluta ipsam, debitis
                      provident sed corporis placeat consectetur corrupti doloribus numquam cumque libero laudantium!
                      Autem voluptatibus vel, consectetur qui ipsam quae id optio impedit?</p>
                  </div>

                </div>
              </div>

            </div>
            {/*  */}
            <div className=''>
              <ul class="nav nav-pills m-5  justify-content-end bord " id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link btn btn-outline-warning text-white mx-3 my-3  fs-5 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><IoMdPlay className='icons movei fs-5 mx-1' /> Movei</button>
                </li>

                <li class="nav-item" role="presentation">
                  <button class="nav-link btn btn-outline-warning text-white my-3  mx-3  fs-5  " id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><IoList className='icons movei fs-5 mx-1' />Tv</button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div className='container'>
                    <div className='text-center text-white mt-5'>
                      <h1 className='heading'>
                        <span class="text">Movei</span>
                      </h1>
                    </div>
                    <div className='row'>

                      {datamovei.map((x, index) =>
                        <div className='col-md-3'>
                          <div className=' divs m-3 position-relative'>
                            <div className='o '>
                              <img src={"https://image.tmdb.org/t/p/w500/" + x.poster_path} alt="" className='w-100 border border-warning' key={index} />

                            </div>
                            <div className='posi '>
                              <h4 className='text-white text-center m-3'>{x.title}</h4>

                            </div>
                            <div className='position-absolute  top-0 end-0 p-1 bg'>{x.vote_average}</div>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                </div>

                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                  <div className='container'>
                    <div className='text-center text-white mt-5'>
                      <h1 className='heading '>
                        <span class="text">Tv</span>
                      </h1>
                    </div>

                    <div className='row '>
                      {datatv.map((x, index) =>
                        <div className='col-lg-3' key={index}>
                          <div className=' divs m-3 position-relative'>
                            <div className='o '>
                              <img src={"https://image.tmdb.org/t/p/w500/" + x.poster_path} alt="" className='w-100 border border-warning' />

                            </div>
                            <div><h4 className='text-white text-center m-3'>{x.name}</h4></div>

                            <div className='posi '>
                              {/* <h4 className='text-white text-center m-3'>{x.title}</h4> */}

                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>




            </div>







            <div className='container m  bg-black mt-4'>
              <div className='row'>
                {/* <div className='text-center text-white'>

  <h1 className='text-danger'>Movei</h1>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
</div> */}

                {/* {datamovei.map((x,index)=>
 <div className='col-lg-3'>
     <div className=' divs m-3 position-relative'>
       <div className='o '>
        <img src={"https://image.tmdb.org/t/p/w500/" + x.poster_path} alt="" className='w-100 border border-danger'key={index} />
         
</div>
       <div className='posi '>
         <h4 className='text-white text-center m-3'>{x.title}</h4>

       </div>
       <div className='position-absolute  top-0 end-0 p-1 bg'>{x.vote_average}</div>
</div>
 </div>
)} */}

                {/*  */}
                {/* <div className='text-center text-white mt-5'>
            <h1 className='heading'>

              <span>Tv</span>
              </h1>
          </div> */}

                {/* {datatv.map((x ,index) =>
            <div className='col-lg-3' key={index}>
              <div className=' divs m-3'>
                <div className='o'>
                  <img src={"https://image.tmdb.org/t/p/w500/" + x.poster_path} alt="" className='w-100 border border-danger' />
   
                </div>
                <h4 className='text-white text-center m-3'>{x.name}</h4>
              </div>
            </div>
          )} */}
                {/*  */}
                <div className='container'>
                  <div className='text-center text-white mt-5'>
                    <h1 className='heading'>
                      <span>person</span>
                    </h1>
                  </div>

                  <div className='container pb-5'>
                    <Slider {...settings}>
                      {dataperson.map((x, index) =>
                        <div className='justify-content-center'>
                          <img src={"https://image.tmdb.org/t/p/w500/" + x.profile_path} alt="" className='w-75  mx-auto border border-warning rounde' />

                        </div>
                      )}
                    </Slider>
                  </div>
                  {/* <Slider >
             
            </Slider> */}
                </div>





                {/* <div className='text-center text-white mt-5'>
            <h1 className='heading'>
              <span>person</span>
            </h1>
          </div> */}

                {/* {dataperson.map((x,index) =>
            <div className='col-lg-3' key={index}>
              <div className=' divs m-3'>
                <div className='o'>
                  <img src={"https://image.tmdb.org/t/p/w500/" + x.profile_path} alt="" className='w-100 border border-danger rounde' />
   
                </div>
                <h4 className='text-white text-center m-3'>{x.name}</h4>
              </div>
            </div>
          )} */}
              </div>
            </div>




            <Sli />






</div>

      <Helmet>
        <title>Home</title>
      </Helmet>

 


</div> 
  )
}
