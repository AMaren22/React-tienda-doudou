const products = [
    { 
        id: '1', 
        name: 'Bolsas tejidas', 
        price: 1000, 
        category: 'Niños/Niñas', 
        img:'images/Products v1/p1-0.jpeg', 
        stock: 7, 
        description:'Bolsas tejidas en hilo de algodon, para que los peques jueguen a hacer las compras'
    },
    
    { 
        id: '2', 
        name: 'Frutas y verduras tejidas', 
        price: 0, 
        category: 'Niños/Niñas', 
        img:'images/Products v1/p2-0.jpeg', 
        stock: 0, 
        description:''
    },
    
    { 
        id: '3', 
        name: 'Mininas', 
        price: 1500, 
        category: 'Niños/Niñas', 
        img:'images/Products v1/p3-0.jpeg', 
        stock: 12, 
        description:'Muñecos de apego'
    },
    
    { 
        id: '4', 
        name: 'Playmate arcoiris', 
        price: 5000, 
        category: 'Bebes', 
        img:'images/Products v1/p4-0.jpeg', 
        stock: 1, 
        description:'Las playmate son un lugar ideal para que los mas chicos juegues. Poseen 1.4m de diámetro, su tela exterior es impermeable, y en su interior posee guara con gabardina estampada '
    },
    
    { 
        id: '5', 
        name: 'Toallón con capucha', 
        price: 2000, 
        category: 'Bebes', 
        img:'images/Products v1/p5-0.jpeg', 
        stock: 2, 
        description:'Medidas: 1m x 1m'
    },
    
    { 
        id: '6', 
        name: 'Toalla + babita', 
        price: 2500, 
        category: 'Bebes', 
        img:'images/Products v1/p6-0.jpeg', 
        stock: 1, 
        description:''
    },
    
    { 
        id: '7', 
        name: 'Turbantes', 
        price: 500, 
        category: 'Niños/Niñas', 
        img:'images/Products v1/p7-0.jpeg', 
        stock: 9, 
        description:'Turbantes de toalla'
    },
    
    { 
        id: '8', 
        name: 'Playmate oveja', 
        price: 5000, 
        category: 'Bebes', 
        img:'images/Products v1/p8-0.jpeg', 
        stock: 0, 
        description:'Las playmate son un lugar ideal para que los mas chicos juegues. Poseen 1.4m de diámetro, su tela exterior es impermeable, y en su interior posee guara con gabardina estampada '
    },
    
    { 
        id: '9', 
        name: 'Playmate ositos', 
        price: 5000, 
        category: 'Bebes', 
        img:'images/Products v1/p9-0.jpeg', 
        stock: 5000, 
        description:'Las playmate son un lugar ideal para que los mas chicos juegues. Poseen 1.4m de diámetro, su tela exterior es impermeable, y en su interior posee guara con gabardina estampada '
    },
    
    { 
        id: '10', 
        name: 'Playmate estrellas', 
        price: 5000, 
        category: 'Bebes', 
        img:'images/Products v1/p10-0.jpeg', 
        stock: 3, 
        description:'Las playmate son un lugar ideal para que los mas chicos juegues. Poseen 1.4m de diámetro, su tela exterior es impermeable, y en su interior posee guara con gabardina estampada '
    },
    
    { 
        id: '11', 
        name: 'Mantas animales', 
        price: 1800, 
        category: 'Niños/Niñas', 
        img:'images/Products v1/p11-0.jpeg', 
        stock: 4, 
        description:'Mantas de micropolar y algodón en su interior'
    },
    
    { 
        id: '12', 
        name: 'Mantas osos', 
        price: 1800, 
        category: 'Niños/Niñas', 
        img:'images/Products v1/p12-0.jpeg', 
        stock: 5, 
        description:'Mantas de micropolar y algodón en su interior'
    },
    
    { 
        id: '13', 
        name: 'Manta conejos', 
        price: 1800, 
        category: 'Niños/Niñas', 
        img:'images/Products v1/p13-0.jpeg', 
        stock: 1, 
        description:'Mantas de micropolar y algodón en su interior'
    }
    
  
]

export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products)
        },2000)
    })
}
