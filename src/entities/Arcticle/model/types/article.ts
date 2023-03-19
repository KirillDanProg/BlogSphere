export enum ArticleBlockVariant {
    IMAGE = 'image',
    TEXT = 'text'
}

interface ArticleImageBlockType {
    type: ArticleBlockVariant.IMAGE
    src: string
    title?: string
}

interface ArticleTextBlockType {
    type: ArticleBlockVariant.TEXT
    paragraphs: string[]
    title?: string
}

export type ArticleBlockType = ArticleImageBlockType | ArticleTextBlockType

export interface ArticleType {
    id: string
    title: string
    text: string
    tags: string[]
    userId: string
    viewCount: number
    createdA: string
    blocks: ArticleBlockType[]
}
