export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails'
export type { ArticleType } from './model/types/article'
export {
    articlesDetailsActions,
    articleDetailsReducer
} from './model/slice/articleDetailsSlice'
export { fetchArticleByIdThunk } from './model/services/fetchArticleById'
