import React, { useState } from 'react'
import { Data } from './Data'



const Card = () => {
    const [text, setText] = useState('Checkout')


    const mousein = () => {
        setText('Buy')
    }


    return (
        <>
            <div className="container my-5 cardwine">
                <div className="card p-3">
                    {
                        Data.map((data) => {
                            return (

                                <div className="row my-5" key={data.id}>
                                    <div className="col-md-4">
                                        <div >
                                            <img src={data.img} alt="" className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className="col-md-7    mx-auto ">
                                        <h2 className="card-title mb-3">{data.wine}</h2>
                                        <h3 className="card-text my-5">{data.text}</h3>
                                        <div className='d-block'>
                                            <a href={data.link} className='btn btn-danger links' target="_blank" onMouseEnter={mousein} onMouseLeave={() => setText(data.wine)}>{text}</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        </>
    )
}

export default Card