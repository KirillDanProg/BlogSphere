export enum ArticleBlockVariant {
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
    CODE = 'CODE'
}

export enum ArticleView {
    LIST = 'LIST',
    GRID = 'GRID'
}

interface ArticleBaseType {
    type: ArticleBlockVariant
    id: string
}

export interface ArticleImageBlockType extends ArticleBaseType {
    type: ArticleBlockVariant.IMAGE
    src: string
    title?: string
}

export interface ArticleTextBlockType extends ArticleBaseType {
    type: ArticleBlockVariant.TEXT
    paragraphs: string[]
    title?: string
}

export interface ArticleCodeBlockType extends ArticleBaseType {
    type: ArticleBlockVariant.CODE
    code: string
}

export type ArticleBlockType = ArticleImageBlockType | ArticleTextBlockType | ArticleCodeBlockType

export interface ArticleType {
    _id: string
    title: string
    text: string
    tags: string[]
    userId: string
    viewCount: number
    createdAt: string
    blocks: ArticleBlockType[]
}
