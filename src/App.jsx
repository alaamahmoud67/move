
// curd
// import axios from 'axios'
// import { Formik, useFormik } from 'formik'
// import React, { useEffect, useState } from 'react'

// export default function App() {
//   // const [dataAPi, setdataAPi] = useState([])
//   const[dataAPi,setdataAPi]=useState([])

//   function submitfrom(values) {

//     postData(values)
//     console.log(values)
//   }

//   async function postData(values) {
//     await axios.post("https://660ac8b5ccda4cbc75dbcd5c.mockapi.io/Tesla", values)

//   }
//   async function getData() {
//     let { data } = await axios.get("https://660ac8b5ccda4cbc75dbcd5c.mockapi.io/Tesla")
//     console.log(data)
//     setdataAPi(data)
//   }

//   useEffect(() => {
//     getData()


//   }, [])
// async    function delet(id){
//   await axios.delete(`https://660ac8b5ccda4cbc75dbcd5c.mockapi.io/Tesla/${id}`)
//   getData()
// }


//   let x = useFormik({
//     initialValues: {
//       name: "",
//       price: "",
//       category: "",
//       count: "",
//       model: "",
//       description: ""
//     }, onSubmit: submitfrom
//   })
//   return (
//     <>
//       <div className='w-75 m-auto mt-4'>
//         <h3 className="mb-3">CRUD Application With REACT</h3>

//         <form onSubmit={x.handleSubmit}>
//           <label htmlFor="Nameproduct">Nameproduct</label>

//           <input type="text" value={x.values.name} onChange={x.handleChange} onBlur={x.handleBlur} className='form-control mb-3' id='Nameproduct' name='name' />


//           <label htmlFor="Priceproduct">Priceproduct</label>
//           <input type='number' value={x.values.price} onChange={x.handleChange} onBlur={x.handleBlur} className='form-control mb-3' id='Priceproduct' name='price' />
//           <label htmlFor="Category">Category</label>
//           <input type="text" value={x.values.category} onChange={x.handleChange} onBlur={x.handleBlur} className='form-control mb-3' id='Category' name='category' />

//           <label htmlFor="Count">Count</label>
//           <input type="text" value={x.values.count} onChange={x.handleChange} onBlur={x.handleBlur} className='form-control mb-3' id='Count' name='count' />
//           <label htmlFor="Model">Model</label>
//           <input type="text" value={x.values.model} onChange={x.handleChange} onBlur={x.handleBlur} className='form-control mb-3' id='Model' name='model' />
//           <label htmlFor="Description">Description</label>
//           <input type="text" value={x.values.description} onChange={x.handleChange} onBlur={x.handleBlur} className='form-control mb-3' id='Description' name='description' />
//           <button type='submit' className="btn btn-success mt-3" id="submit" >Addproudct</button>
//           {/* <button type="submit" className="btn btn-success mt-3 " id="upp" >update</button> */}
//         </form>
//       </div>
//       <div className="w-50 m-auto mt-5">

//         <table className="table table-hover table-dark">
//           <thead >
//             <tr>
//               <th scope="col">index</th>
//               <th scope="col">name</th>
//               <th scope="col">price</th>
//               <th scope="col">Category</th>
//               <th scope="col">Count</th>
//               <th scope="col">Description</th>
//               <th scope="col">delete</th>
//               <th scope="col">update</th>
//             </tr>
//           </thead>

//           <tbody className="tbo">
//             {dataAPi.map((x)=>
//               <tr>
//                 <th className='rowD'>{x.id}</th>
//                 <td>{x.name}</td>
//                 <td>{x.price}</td>
//                 <td>{x.category}</td>
//                 <td>{x.count}</td>
//                 <td>{x.model}</td>
//                 <td>{x.description}</td>
// <button className='btn btn-success'>updata</button>
//                 <button className='btn btn-danger' onClick={()=> delet(x.id)}>delet</button>
//               </tr>


//             )}

//           </tbody>
//         </table>
//       </div>

//     </>
//   )
// }







// import React, { useState } from 'react'
// import Parent from './component/parent/Parent'
// import axios from 'axios'

// export default function App() {
//   // لو عايوين نخزن داتا في usetate
//   const [dataNews, setDataNews] = useState([])


//   async function getData() {
//     let { data } = await axios.get("https://newsapi.org/v2/top-headlines?country=eg&apiKey=0060f8444c8b4e8fa2098b059b26947c")
//     setDataNews(data.articles)
//   }

//   // getData()
//   return (
//     <>
//       app


//       <div className='container'>
//         <div className='row'>
//           {dataNews.map((x) =>
//             <div className='col-lg-3'>
//               <div>
//                 <h1>titel:{x.author}</h1>
//                 <h5>data::{x.publishedAt}</h5>
//                 <p>titel:{x.titel}</p>
//                 <a href={x.url} target='-blank'>see more</a>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>


//     </>
//   )
// }


// curd
// 
// 
// 
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Offline,Online } from 'react-detect-offline'
import Context from './componen/context/Context'
import Latout from './componen/Latout/Latout'
import Home from './componen/Home/Home';
import Tv from './componen/tv/Tv'
import Error from './componen/Error/Error'
import Details from './componen/Details/Details'
import Detailsmovei from './componen/Detailsmovei/Detailsmovei'
import Movie from './componen/movie/Movie'

export default function App() {
  
  

let x=createBrowserRouter([{
  path:"/",element:<Latout/>,children:[
    { index:"true",element:<Home/>},
    {path:"Movie",element:<Movie/>},
{path:"Tv",element:<Tv/>},
{ path: "*", element: <Error/> },
    {path: "Details/:id", element: <Details/> },
    { path: "Detailsmovei/:id", element: <Detailsmovei/> },

  ]
}])

  
  return <div>    <RouterProvider router={x} />
  
    <div className='text-denger'>
      <Offline>Only shown offline (surprise!) <i className='fa fa-wifi fa-3x'></i></Offline>
    </div>
  </div>
}
