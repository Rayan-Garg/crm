import "./view.scss"
import React from "react"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Products from "../../components/product/Products"
import product from "../../product_data.js"
import {loadStripe} from "@stripe/stripe-js"

export default function View(){
    let stripePromise;

    const getStripe = () => {
        if(!stripePromise){
            stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);
        }
        return stripePromise;
    }

    const checkoutOptions = {
        lineItems: [{price: "price_1LcDS7CKlauyNafFlaX7o19J", quantity: 1}],
        mode: "payment",
        successUrl: "https://ray-crm.netlify.app/view",
        cancelUrl: "https://ray-crm.netlify.app/view",
    }

    const redirectToCheckout1 = async () => {
         checkoutOptions.lineItems = [{price:product[0].priceid, quantity: 1}];
         const stripe = await getStripe()
         const {error} = await stripe.redirectToCheckout(checkoutOptions)
         console.log("Stripe checkout error", error)
    }

    const redirectToCheckout2 = async () => {
        checkoutOptions.lineItems = [{price: product[1].priceid, quantity: 1}];
        const stripe = await getStripe()
        const {error} = await stripe.redirectToCheckout(checkoutOptions)
        console.log("Stripe checkout error", error)
   }
    const redirectToCheckout3 = async () => {
    checkoutOptions.lineItems = [{price: product[2].priceid, quantity: 1}];
    const stripe = await getStripe()
    const {error} = await stripe.redirectToCheckout(checkoutOptions)
    console.log("Stripe checkout error", error)
   }
   const redirectToCheckout4 = async () => {
    checkoutOptions.lineItems = [{price: product[3].priceid, quantity: 1}];
    const stripe = await getStripe()
    const {error} = await stripe.redirectToCheckout(checkoutOptions)
    console.log("Stripe checkout error", error)
   }

   let productList = product.map((prod)=>{
    return(
    <Products key = {prod.id} img = {prod.thumb} title = {prod.product_name} description = {prod.description} 
    price = {prod.price} id = {prod.id} clicked = {eval(`redirectToCheckout${prod.id}`)}/>)
    })

    return(
        <div className = "view">
        <Sidebar/>
        <div className="viewContainer">
            <Navbar/>
            <h1 className="headings">Products</h1>
            <div className="products">
            {productList}
            </div>
        </div>
        </div>
    )
    
}