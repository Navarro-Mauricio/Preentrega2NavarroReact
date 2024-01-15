const productos = [
    { id: "1", nombre: "Sticker 1", stock: 10, precio: 500, img: "../img/Sticker 2.png", idCat: "2" },
    { id: "2", nombre: "Sticker 2", stock: 10, precio: 500, img: "../img/Sticker 4.png", idCat: "2" },
    { id: "3", nombre: "Sticker 3", stock: 10, precio: 500, img: "../img/Sticker 30.png", idCat: "2" },
    { id: "4", nombre: "Sticker 4", stock: 10, precio: 500, img: "../img/Sticker 41.png", idCat: "2" },
    { id: "5", nombre: "Sticker 5", stock: 10, precio: 500, img: "../img/Sticker 54.png", idCat: "2" },
    { id: "6", nombre: "Sticker 6", stock: 10, precio: 500, img: "../img/Sticker 70.png", idCat: "2" },
    { id: "7", nombre: "Sticker 7", stock: 10, precio: 500, img: "../img/Sticker 297.png", idCat: "2" },
    { id: "8", nombre: "Sticker 8", stock: 10, precio: 500, img: "../img/Sticker 479.png", idCat: "2" },
    { id: "9", nombre: "Poster 1", stock: 10, precio: 700, img: "../img/1.png", idCat: "3" },
    { id: "10", nombre: "Poster 2", stock: 10, precio: 700, img: "../img/2.png", idCat: "3" },
    { id: "11", nombre: "Poster 3", stock: 10, precio: 700, img: "../img/3.png", idCat: "3" },
    { id: "12", nombre: "Poster 4", stock: 10, precio: 700, img: "../img/4.png", idCat: "3" },
    { id: "13", nombre: "Poster 5", stock: 10, precio: 700, img: "../img/5.png", idCat: "3" },
    { id: "14", nombre: "Poster 6", stock: 10, precio: 700, img: "../img/6.png", idCat: "3" },
    { id: "15", nombre: "Poster 7", stock: 10, precio: 700, img: "../img/7.png", idCat: "3" },
    { id: "16", nombre: "Poster 8", stock: 10, precio: 700, img: "../img/8.png", idCat: "3" },
]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(item => item.id === id);
            resolve(producto);
        }, 100)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}



