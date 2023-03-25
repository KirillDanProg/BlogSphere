export const convertDate = (date: string) => {
    return new Date(date || '').toUTCString()
        .slice(5, 16)
}
