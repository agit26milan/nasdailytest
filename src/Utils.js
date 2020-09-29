import { BASE_URL } from './Constant/Url.json'
import axios from 'axios'
export const request = async (url: string, method: 'DELETE' | 'GET' | 'POST' | 'PUT', body?:any, onSuccess, onError) => {
    const defaultMessage = 'Failed get story'
  await axios({url, method, baseURL: BASE_URL, data: body}).then((response) => {
      if(response.status === 200) {
        if(onSuccess) onSuccess(response)
      }
  }).catch((e) => {
      if(e) {
        if(onError) onError(e)
      } else {
        if(onError) onError(defaultMessage)
      }
  })
}
