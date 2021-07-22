import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../store/actions';
const Login = (props) => {
    const { push } = useHistory()

    const initialForm = {
        username: '',
        password: ''
    }
    const [formValues, setFormValues] = useState(initialForm)



    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.prevent.default();
        console.log(formValues)
        axios
            .post('https://bamazonbackend.herokuapp.com/users/login', formValues)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                props.getUser(res.data.user)

                push('/profile')
            })
            .catch(err => {
                console.log(`error: ${err.response}`)
            })
    }
    return (
        <div className="window">
            <div className="wrapper">
                <form className="loginForm" onSubmit={handleSubmit}>


                    <div className="formcontent">
                        <h2>Sign-In</h2>
                        <div className="inputboxes">
                            <label>
                                username
                            </label>
                            <input
                                name='username'
                                type='text'
                                placeholder='enter username here'
                                value={formValues.username}
                                onChange={handleChange}
                            >
                            </input>

                        </div>
                        <div className="inputboxes">
                            <label>
                                password
                            </label>
                            <input
                                name='password'
                                type='password'
                                placeholder='enter password here'
                                value={formValues.password}
                                onChange={handleChange}
                            >
                            </input>

                        </div>
                        <button className="loginbutton" >continue</button>
                    </div>
                </form>


            </div>

        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: (user) => dispatch(getUser(user))
    }
}
export default connect(null, mapDispatchToProps)(Login)