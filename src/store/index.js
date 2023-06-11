import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slice";
import cart from './slices/cart.slice'
import minicart from './slices/minicart.slice'
import search from './slices/search.slice'
import nameProduct from './slices/nameProduct.slice'
import noti from './slices/noti.slice'
import productTitle from './slices/productTitle.slice'
import productId from   './slices/productId.slice'
import nav from './slices/nav.slice'
import subtotal from './slices/subtotal.slice'
import productQuantity from './slices/productQuantity.slice'

export default configureStore ({
    reducer: {
        products,
        cart,
        minicart,
        search,
        nameProduct,
        noti,
        productTitle,
        productId,
        nav,
        subtotal,
        productQuantity
    }
})