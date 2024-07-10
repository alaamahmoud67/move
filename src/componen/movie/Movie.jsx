import React, { useContext, useEffect, useState } from 'react'

import axios from 'axios'
import { context } from '../context/Context';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Sli from '../sli/Sli';
import ReactLoading from 'react-loading';

export default function Movie() {
  let {  show, getinput, setInput, input }= useContext(context)

  const [datamovei, setatamovei] = useState([])
 
  async function getDatamovei() {

    let { data } = await axios.get(`https://api.themoviedb.org/3/${show}/movie?api_key=59b0516957d5f8a1dd764c736e17d853`,{
      params:{
        query: input
      }
    })
    setatamovei(data.results)
    console.log(data.results)
  }
  // const [loding, setLoding] = useState(true)
  useEffect(() => {


    // const fakeda = () => {
    //   setTimeout(() => {
    //     setLoding(false)
    //   }, 1000)
    // }


    // fakeda()
  }, [])

  
  useEffect(() => {
    getDatamovei()
    
  }, [input])
  
  return (
    <div className="bg-black">
      <Helmet>
        <title>Movei</title>
      </Helmet>
{/* {
        loding ? <div className='container justify-content-center d-flex pp'>
          <ReactLoading type={"spinningBubbles"} color={"hsl(57, 97%, 45%)"} height={580} width={100} />
        </div>
          : */}
<div>


           

            <div className='container pt-5'>



              <div className='row'>
                <div className='text-center text-white'>
                  {/* <input type="search" onChange={getinput} placeholder='Search' style={{ width: "100%", height: "7vh", marginTop: "10%" }} /> */}
                  <div className='position-relative'>
                    <input type="search" onChange={getinput} placeholder='Search' style={{ marginBottom: "10%" }} id='sear' />
                    <label htmlFor="sear" className='lab'> <i class="fas fa-search fs-4"></i></label>
                  </div>
                  <h1 className='text-warning'>Movei</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>

                {datamovei.filter((x) => "https://image.tmdb.org/t/p/w500/" + x.poster_path !== null).map((x, index) =>
                  <div className='col-lg-3' key={index}>
                    <div className=' divs m-3'>
                      <div className='o position-relative'>
                        <Link to={`/Detailsmovei/${x.id}`}>
                          <img src={"https://image.tmdb.org/t/p/w500/" + x.poster_path} alt="" className='w-100 border border-warning img' />
                        </Link>


                      </div>
                      {/* <div><h4 className='text-white text-center m-3'>{x.title}</h4></div> */}

                      <h4 className='text-white text-center m-3'>{x.title}</h4>
                    </div>
                  </div>
                )}



              </div>
            </div>


            <Sli />






</div>








    </div>
  )
}
