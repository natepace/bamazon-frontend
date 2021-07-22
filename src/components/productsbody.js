import React, { useEffect } from 'react'
// import axios from 'axios'
import { Listing } from './listing.js';
import { connect } from 'react-redux';
import { fetchData } from '../store/actions.js';


const ProductsBody = (props) => {

    // let initialstate = {

    // }
    // const [listings, setListings] = useState(initialstate)
    // const { equipment_type } = props
    // console.log(equipment_type)





    // axios
    // .get('https://bamazonbackend.herokuapp.com/products')
    // .then(res => {
    //     console.log(res.data)
    //     setListings(
    //         res.data
    //     )
    // })
    useEffect((props) => {

        fetchData(props);
    }, [])
    // console.log(listings)
    // if (listings === initialstate) {
    //     return (
    //         <div></div>
    //     )
    // }
    console.log(props.products)

    return (
        <div className="wrapper">
            <div className="listings">
                {props.isLoading ? <h1>l o a d i n g . . .</h1> : null}
                {props.error ? <h1>{props.error}</h1> : null}
                {props.products.map(listing => {
                    return (
                        // <p>{listing.product_name}</p>
                        <Listing listing={listing} />
                    )
                })}
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        products: state.products,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchData })(ProductsBody)