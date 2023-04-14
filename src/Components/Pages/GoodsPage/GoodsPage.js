import React from 'react'
import styles from'./GoodsPage.module.css'
import { json } from 'react-router-dom'
import GoodsList from '../../GoodsList/GoodsList'
import { getGoods } from '../../../Requests/Goods_requests'



function GoodsPage() {
    getGoods()
    return (
        <div className={styles.goods_wrapper}>
            <h2>Make your choiсe...</h2>
            <div className={styles.goods_section}>
                <GoodsList /> 
            </div>
            
        </div>
    )
}

export default GoodsPage