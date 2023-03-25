import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { type CommentType } from 'entities/Comment'
import defaultAvatar from 'shared/assets/images/defaultUserAvatar.jpg'
import { fetchArticleComments } from './fetchArticleComments'

const data: CommentType[] = [
    {
        userId: '1',
        text: 'some comment',
        userName: 'Alex',
        avatar: defaultAvatar,
        _id: '1',
        createdAt: '01.01.2001',
        postId: '1'
    },
    {
        userId: '2',
        text: 'comment 2',
        userName: 'Bob',
        avatar: defaultAvatar,
        _id: '2',
        createdAt: '01.01.2001',
        postId: '1'
    }
]

describe('fetchArticleComments', () => {
    it('fetch comments', async () => {
        const thunk = new TestAsyncThunk(fetchArticleComments)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk('1')

        expect(thunk.api.get)
            .toHaveBeenCalled()
        expect(result.meta.requestStatus)
            .toEqual('fulfilled')
        expect(result.payload)
            .toEqual(data)
    })
    it('return error if articleId is undefined', async () => {
        const thunk = new TestAsyncThunk(fetchArticleComments)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk(undefined)

        expect(thunk.api.get)
            .not
            .toHaveBeenCalled()
        expect(result.meta.requestStatus)
            .toEqual('rejected')
        expect(result.payload)
            .toEqual('Не удалось загрузить комментарии')
    })
})
