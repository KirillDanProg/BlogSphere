import { createSelector } from '@reduxjs/toolkit'
import { getArticleDetailsData } from 'entities/Arcticle/model/selectors/articleDetails'
import { getUserAuthData } from 'entities/User/model/selectors/userSelectors'

export const getAllowArticleEdit = createSelector(
    getUserAuthData,
    getArticleDetailsData,
    (userData, articleData) => {
        if (!userData || !articleData) {
            return false
        }
        return String(userData._id) === String(articleData.userId)
    }
)
