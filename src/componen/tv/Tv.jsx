import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Form } from 'formik'

import { Link } from 'react-router-dom';
import { context } from '../context/Context';
import { Helmet } from "react-helmet";
import Sli from '../sli/Sli';
import ReactLoading from 'react-loading';


export default function Tv() {
  // const [loding, setLoding] = useState(true)
  // useEffect(() => {


  //   const fakeda = () => {
  //     setTimeout(() => {
  //       setLoding(false)
  //     }, 1000)
  //   }


  //   fakeda()
  // }, [])




  const [datatv, setataTv] = useState([])

  let { show, getinput, setInput, input } = useContext(context)

  // const [loading, setLoading] = useState(false)
  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 5000)

  // }, [])
  // const [input, setInput] = useState("")

  // let show = input ? "search" : "discover"

  // function getinput(e) {
  //   setInput(e.target.value)
  // }

  
 


  async function getDatatv() {

    let { data } = await axios.get(`https://api.themoviedb.org/3/${show}/tv?api_key=59b0516957d5f8a1dd764c736e17d853`,{
      params: {
            query: input
          }
    })
    setataTv(data.results)
    
    console.log(data.results)
  }

//   let { data } = await axios.get(`https://api.themoviedb.org/3/${show}/movie?api_key=59b0516957d5f8a1dd764c736e17d853`, {
//     params: {
//       query: input
//     }
//   })
//   setatamovei(data.results)
//   console.log(data.results)
// }
useEffect(() => {
  getDatatv()
}, [input])

  
  
  return (
   

    <div className='bg-black'>
      <Helmet>
        <title>Tv</title>
      </Helmet>

      
      {/* {
        loding ? <div className='container justify-content-center d-flex pp'><ReactLoading type={"spokes"} color={"hsl(57, 97%, 45%)"} height={580} width={100} /></div>
          :
          <div> */}



            
            <div className='container pt-5'>
              <div className='position-relative'>
                <input type="search" onChange={getinput} placeholder='Search' style={{ marginBottom: "10%" }} id='sear' />
                <label htmlFor="sear" className='lab'> <i class="fas fa-search fs-4"></i></label>
              </div>

              <div className='text-center text-white mt-5'>
                <h1 className='heading'>
                  <span class="text">Tv</span>
                </h1>
              </div>

              <div className='row'>
                {datatv.map((x) =>

                  <div className='col-lg-3'>
                    <div className=' divs m-3'>
                      <div className='o position-relative'>
                        <Link to={`/Details/${x.id}`}>

                          <img src={"https://image.tmdb.org/t/p/w500/" + x.poster_path} alt="" className='w-100 border border-warning img' /></Link>

                        {/* <div className='posi '>

                  </div> */}
                      </div>
                      <div>
                        <h4 className='text-white text-center m-3'>{x.name}</h4>

                      </div>
                    </div>
                  </div>

                )}
              </div>




            </div>





            <Sli />



          </div>
     
  )
}
