import React from 'react'

export default function Chiled({ x, deletfun, inCreament, deCreament }) {



    return (
        // aro function and map
        // x.map(  (y)=>{}                  )
        <div>
            <div className='container'>
                <div className='row justify-content-center'>
                    {/* for loop */}
                    {x.map((y,index) =>
                        <div className='col-lg-4 mt-3'>
                            <div className='position-relative text-center text-white  fs-4 bg-success  '>

                                <p>name::{y.name}</p>
                                <p className={y.price > 10000 ? "text-info" : ""}>price::{y.price}</p>

                                <p>id::{y.id}</p>
                                <p>category::{y.category}</p>
                                <button className='btn bg-black text-white w-100 my-2' onClick={function(){deletfun(index)}}>delet</button>
                                <button className='btn bg-secondary text-white mx-2 w-25' onClick={() => inCreament(y)}>++</button>
                                <button className='btn bg-black text-white mx-2 w-25' onClick={deCreament}>--</button>
                                {y.sale ? <div className='bg-danger p-1 position-absolute top-0 end-0'>sale</div> : ""}

                            </div>

                        </div>


                    )}


                </div>
            </div>

        </div>
    )
}

