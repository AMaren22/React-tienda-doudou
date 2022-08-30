export const productsFromDB = (doc) =>{
    const data = doc.data()

    const productAdapted = {
        id: doc.id,
        name: data.name , 
        price: data.price , 
        category: data.category , 
        img: data.img, 
        stock: data.stock , 
        description: data.description
    }

    return productAdapted
}