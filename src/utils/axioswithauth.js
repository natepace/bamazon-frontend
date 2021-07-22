import axios from 'axios';

const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token,
        },
        baseURL: "https://bamazon-backend.herokuapp.com/"
    });
};

export default axiosWithAuth