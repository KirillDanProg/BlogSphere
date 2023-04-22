export const convertDate = (date: string | undefined) => {
    return new Date(date || '').toUTCString()
        .slice(5, 16)
}
