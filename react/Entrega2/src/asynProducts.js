//3 funciones que se encargan de revoler este 

const products = []

export const getProducts = ()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(products)
            },500)
        })
}

export const getProductById = (productId)=>{
   return new Promise ((resolve) =>{
    setTimeout(()=>{
        resolve(products.find(prod => prod.id === productId))
    },500)
   })
}

export const getProductByCategory = (categoryId)=>{
    return new Promise ((resolve) =>{
        setTimeout( ()=>{
            resolve(products.filter (prod=>prod.category === categoryId))
        },500)
})

}


