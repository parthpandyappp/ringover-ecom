import uuid from "uuid"

const productData = [
{
    id: uuid(),
    name: "Nike koiy",
    price: 4000,
    rating: 4.5,
    imgSrc: {alt:"nike-koiy", link:""}
},
{
    id: uuid(),
    name: "Adidas yogu",
    price: 8000,
    rating: 4.2,
    imgSrc: {alt:"adidas-yogu", link:""}
},
]

export {productData};