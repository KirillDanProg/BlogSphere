import { validateUserProfile } from '../validateUserProfile/validateUserProfile'
import { ValidateProfileErrors } from '../../types/editableProfileCardSchema'

describe('validateUserProfile', () => {
    it('return empty array when there is no errors', () => {
        const profile = {
            instagram: 'instagram.com',
            lastName: 'Vychuzhanin',
            firstName: 'Kirill',
            country: 'Russia',
            age: 24
        }
        const result = validateUserProfile(profile)
        expect(result.length)
            .toBe(0)
    })
    it('return array of errors when fields invalid', () => {
        const profile = {
            instagram: 'i',
            lastName: 'V',
            firstName: 'K',
            country: 'R',
            age: 170
        }
        const result = validateUserProfile(profile)
        expect(result.length)
            .toBe(5)
        expect(result)
            .toEqual([
                ValidateProfileErrors.INCORRECT_COUNTRY,
                ValidateProfileErrors.INCORRECT_AGE,
                ValidateProfileErrors.INCORRECT_LASTNAME,
                ValidateProfileErrors.INCORRECT_FIRSTNAME,
                ValidateProfileErrors.INCORRECT_INSTAGRAM
            ])
    })
    it('return error when url is invalid', () => {
        const profile = {
            instagram: 'instagramcom'
        }
        const result = validateUserProfile(profile)
        expect(result.length)
            .toBe(1)
        expect(result)
            .toEqual([
                ValidateProfileErrors.INCORRECT_INSTAGRAM
            ])
    })
    it('return empty array when there is no data', () => {
        const profile = {}
        const result = validateUserProfile(profile)
        expect(result.length)
            .toBe(0)
        expect(result)
            .toEqual([])
    })
})
