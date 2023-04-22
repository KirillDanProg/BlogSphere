import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const data = window.localStorage.getItem('userData')
let token: string
if (data) {
    token = JSON.parse(data).token
} else {
    token = ''
}
export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: headers => {
            headers.set('Authorization', token)
            return headers
        }
    }),
    endpoints: () => ({})
})
