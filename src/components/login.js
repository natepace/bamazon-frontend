import React from 'react'

export const Login = () => {
    return (
        <div className="window">
            <div className="wrapper">
                <form className="loginForm">


                    <div className="formcontent">
                        <h2>Sign-In</h2>
                        <div className="inputboxes">
                            <label>
                                username
                            </label>
                            <input>
                            </input>

                        </div>
                        <div className="inputboxes">
                            <label>
                                password
                            </label>
                            <input>
                            </input>

                        </div>
                        <button className="loginbutton">continue</button>
                    </div>
                </form>


            </div>

        </div>
    )
}
