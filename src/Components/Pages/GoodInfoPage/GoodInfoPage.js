import React, {  useState, useEffect } from 'react'
import{ useParams } from 'react-router-dom'


import RatingList from '../../RatingsList/RatingsList'
import { getGood } from '../../../Requests/Goods_requests'

import styles from './GoodInfoPage.module.css'



function GoodInfoPage() {
   
let [good, setGood] = useState({})

let {id} = useParams()

// useEffect ( () => {
//     let url = `https://fakestoreapi.com/products/${id}`
//         fetch (url)
//         .then (res =>res.json())
//         .then ((data) => setGood(data))
//     }, [])


//----------------------------------------------------

useEffect(() => { 
    getGood(id, (data) => setGood(data))
}, []);

const {title, image, price, description, rating } = good
//--------------------------------------------------------
console.log(rating)
    return (

    <div className={styles.good_card}>
        <h1>{title}</h1>
        <img src={image}/>
        <div className={styles.info}> 
            <p><b>Price:</b> {price} $</p>
            <p><b>Description:</b> {description}</p>
            <div className={styles.rating_list}> 
                    <RatingList rating={rating} /> *
                     {/* <RatingList {...rating}/>  */}
            </div>
        </div>
    </div>
    )
}

export default GoodInfoPage