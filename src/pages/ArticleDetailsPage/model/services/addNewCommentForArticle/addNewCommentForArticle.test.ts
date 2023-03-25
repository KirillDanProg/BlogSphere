import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { type CommentType } from 'entities/Comment'
import { addNewCommentForArticle } from './addNewCommentForArticle'
import { type StateSchema } from 'app/providers/StoreProvider'

const data: CommentType[] = [
    {
        userId: '1',
        text: 'some comment',
        userName: 'Alex',
        avatar: '',
        _id: '1',
        createdAt: '01.01.2001',
        postId: '2'
    },
    {
        userId: '2',
        text: 'comment 2',
        userName: 'Bob',
        avatar: '',
        _id: '2',
        createdAt: '01.01.2001',
        postId: '2'
    }
]

describe('addNewCommentForArticle', () => {
    it('returns updated list of comments after adding one', async () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data: {
                    _id: '1'
                }
            }
        }
        const thunk = new TestAsyncThunk(addNewCommentForArticle, state)
        thunk.api.post.mockReturnValue(Promise.resolve())
        const result = await thunk.callThunk('some text')
        expect(thunk.api.post)
            .toHaveBeenCalled()
        expect(result.meta.requestStatus)
            .toEqual('fulfilled')
        expect(result.payload)
            .toEqual(true)
    })

    it('catch error if article is undefined', async () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: undefined
        }
        const thunk = new TestAsyncThunk(addNewCommentForArticle, state)
        thunk.api.post.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk('some text')
        expect(thunk.api.post)
            .not
            .toHaveBeenCalled()
        expect(result.meta.requestStatus)
            .toEqual('rejected')
        expect(result.payload)
            .toEqual('Не удалось добавить комментарий')
    })
})
