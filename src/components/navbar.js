import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <div className="navbarBox">
            <div className="topHalfNav">
                <div className="searchbar">
                    <input placeholder="search anything">
                    </input>
                    <button>
                        search
                    </button>
                </div>
                <div>
                    <Link to="login">
                        <div> <p>sign in</p> </div>
                    </Link>
                </div>


            </div>
            <div className="productCategories">
                <Link to='/all'>
                    <div className='navText'><span className='whiteBox'>all</span></div>
                </Link>
                <Link to='/computers'>
                    <div className='navText'><span className='whiteBox'>computers</span></div>
                </Link>
                <Link to='/phones'>
                    <div className='navText'><span className='whiteBox'>phones</span></div>
                </Link>
                <Link to='/kitchen'>
                    <div className='navText'><span className='whiteBox'>kitchen</span></div>
                </Link>
                <Link to='/videogames'>
                    <div className='navText'><span className='whiteBox'>video gaming</span></div>
                </Link>
                <Link to='/toys'>
                    <div className='navText'><span className='whiteBox'>toys & games</span></div>
                </Link>
            </div>
        </div>
    )
}
