import axios from 'axios'

const URL = "http://localhost:5000/"

const usersFetch = axios.create({
    baseURL: URL,
    headers: {
        "Content-Type": "application/json"
    },
})

export default usersFetch