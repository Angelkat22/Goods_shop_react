import React, {useEffect, useState} from 'react'
import GoodItem from '../GoodItem/GoodItem';
import {getGoods} from '../../Requests/Goods_requests'
import styles from './GoodsList.module.css'

function GoodsList() {
    
const [goods, setGoods] = useState ([])
useEffect(() => getGoods(setGoods), [])


    return (
        <div className={styles.goods_container}>
            {
                goods.map(elem => <GoodItem key ={elem.id} 
                                            {...elem}
                                            id ={elem.id}/>) 
            }
        </div>
    )
}

export default GoodsList