import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Listing } from './listing.js'



export const ProductsBody = (props) => {
    let initialstate = {

    }
    const [listings, setListings] = useState(initialstate)
    const { equipment_type } = props
    console.log(equipment_type)




    useEffect(() => {
        axios
            .get('https://bamazonbackend.herokuapp.com/products')
            .then(res => {
                console.log(res.data)
                setListings(
                    res.data
                )
            })
    }, [])
    console.log(listings)
    if (listings === initialstate) {
        return (
            <div></div>
        )
    }


    return (
        <div className="wrapper">
            <div className="listings">
                {listings.map(listing => {
                    return (
                        // <p>{listing.product_name}</p>
                        <Listing listing={listing} />
                    )
                })}
            </div>
        </div>
    )
}
