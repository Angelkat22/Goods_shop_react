import React from 'react'
import styles from './GoodItem.module.css'
import { Link } from 'react-router-dom'
import RatingList from '../RatingsList/RatingsList'


function GoodItem({id, title, rating}) {


    return (
        <div> 
            <Link className={styles.goods_item} to={`/goods/${id}`}>
                <div className={styles.item}>
                
                    <h3>{`${id}.${title}`}</h3>
                
                    <div className={styles.rating_list}> 
                        <RatingList rating={rating}/> 
                    </div>
                </div>
                </Link>
        </div>
    )
}

export default GoodItem