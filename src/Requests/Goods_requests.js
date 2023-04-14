
export const getGoods = (callback)=>{
    fetch (`https://fakestoreapi.com/products/`)
    .then (res => res.json())
    .then (json => callback(json))
}

export const getGood = (id, callback)=>{
    fetch (`https://fakestoreapi.com/products/${id}`)
    .then (res => res.json())
    .then ((json) => callback(json))
}

