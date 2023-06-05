import { rtkApi } from 'shared/rtkApi'
import { type INotification } from '../model/types'

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchNotification: builder.query<INotification[], null>({
            query: () => ({
                url: '/notifications'
            })
        })
    })
})

export const { useFetchNotificationQuery } = notificationApi
