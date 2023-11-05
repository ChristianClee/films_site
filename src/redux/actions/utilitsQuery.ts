import { FetchT } from '../../components/fetchingTypes'

export function filter(data: FetchT): FetchT {
  data.docs = data.docs.filter(item => item.poster ? true : false)
  return data
}