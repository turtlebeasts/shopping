import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
    const {data} = props
  return (
    <div className='card'>
        <div className="card-body">
            <h6>{data.title}</h6>
            <img src={data.image} alt={data.title} className="img-fluid"/>
            <Link className='btn btn-warning mt-2 w-100' to={`/item/${data.id}`} >Check out</Link>
        </div>
    </div>
  )
}
