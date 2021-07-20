import React from 'react'

export const Listing = (props) => {
    const { listing } = props

    return (
        <div className="listingBox">
            <p>{listing.product_name}</p>
            <p>{listing.price}</p>
            <p>{listing.product_description}</p>
        </div>
    )
}
