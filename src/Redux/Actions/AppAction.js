import { IS_ERROR_APP } from '../Types'

export const isAppError = (isError) => ({
  type: IS_ERROR_APP,
  payload: isError
})
