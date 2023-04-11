import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchNextArticlesPage } from '../fetchNextArticlesPage/fetchNextArticlesPage'
import { type StateSchema } from 'app/providers/StoreProvider'
import { fetchArticles } from '../fetchArticles/fetchArticles'

jest.mock('../fetchArticles/fetchArticles')

describe('fetchNextArticlesPage', () => {
    const state: DeepPartial<StateSchema> = {
        articlesPage: {
            entities: {},
            ids: [],
            page: 1,
            hasMore: true,
            status: 'idle',
            limit: 1
        }
    }
    it('request fulfilled', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, state)
        thunk.api.get.mockReturnValue(Promise.resolve())
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus)
            .toEqual('fulfilled')
        expect(thunk.dispatch)
            .toHaveBeenCalledTimes(4)
        expect(fetchArticles)
            .toHaveBeenCalled()
    })

    it('return undefined if there is no articles ', async () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                entities: {},
                ids: [],
                page: 1,
                hasMore: false,
                status: 'idle',
                limit: 1
            }
        }
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, state)
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus)
            .toEqual('fulfilled')
        expect(thunk.dispatch)
            .toHaveBeenCalledTimes(2)
        expect(result.payload)
            .toEqual(undefined)
        expect(fetchArticles)
            .not
            .toHaveBeenCalled()
    })
})
