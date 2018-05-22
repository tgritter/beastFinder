import {FILTER_TYPE} from './types'

export const setBeastTemperment = payload => ({ type: FILTER_TYPE.beastTemperment, payload });
export const setBeastColor = payload => ({ type: FILTER_TYPE.beastColor, payload });
export const setBeastHairy = payload => ({ type: FILTER_TYPE.beastHairy, payload });
