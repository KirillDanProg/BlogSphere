export {
    ArticleDetailsPageLazy as ArticleDetailsPage
} from './ui/ArticleDetailsPage/ArticleDetailsPageLazy'
export type { ArticleDetailsPageSchema } from './model/types'
export { getArticleComments } from './model/slice/articleDetailsCommentsSlice'
export { getArticleRecommendations } from './model/slice/articleDetailsRecommendationsSlice'
export { getAllowArticleEdit } from './model/selectors/article'
