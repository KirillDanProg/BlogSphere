import axios from 'axios'

const data = window.localStorage.getItem('userData')
let token: string
if (data) {
    token = JSON.parse(data).token
} else {
    token = ''
}

export const api = axios.create({
    baseURL: __API__,
    headers: {
        Authorization: `Bearer ${token}`
    }
})
