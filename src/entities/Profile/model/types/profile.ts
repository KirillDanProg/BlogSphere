export interface ProfileType {
    country: string
    age: number
    firstName: string
    instagram: string
    avatar: string
    lastName: string
}

export type ProfileTypePartial = Partial<ProfileType>
