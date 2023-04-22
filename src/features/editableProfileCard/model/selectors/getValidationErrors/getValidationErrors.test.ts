import { type StateSchema } from 'app/providers/StoreProvider'
import { ValidateProfileErrors } from '../../types/editableProfileCardSchema'
import { getValidationErrors } from './getValidationErrors'

describe('getValidationErrors', () => {
    it('', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validationErrors: [
                    ValidateProfileErrors.INCORRECT_COUNTRY,
                    ValidateProfileErrors.INCORRECT_AGE,
                    ValidateProfileErrors.INCORRECT_LASTNAME
                ]
            }
        }
        expect(getValidationErrors(state as StateSchema))
            .toEqual([
                ValidateProfileErrors.INCORRECT_COUNTRY,
                ValidateProfileErrors.INCORRECT_AGE,
                ValidateProfileErrors.INCORRECT_LASTNAME
            ])
    })
})
