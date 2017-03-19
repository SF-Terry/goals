import { innerStateModel } from '../store/initialState'


// get current temporary target
const getTmpTarget = () => ReduxStore.getState().innerState.tmpTarget


const innerState = (state = { ...innerStateModel }, action) => {
  /**
   * get new temporary target by updating one of it's keys
   * @param {string} key the key of temporary target 
   */
  const getNewTmpTarget = key => ({
    ...getTmpTarget(),
    [key]: action.value
  })

  switch (action.type) {
    case 'MODIFY_INNERSTATE_ROUTE':
      const preRoute = ReduxStore.getState().innerState.route
      return {
        ...state,
        "prevRoute": preRoute,
        "route": action.value
      }
    case 'MODIFY_INNERSTATE_TIMETYPE':
      return {
        ...state,
        "timeType": action.value
      }
    case 'MODIFY_INNERSTATE_TMPTARGET':
      return {
        ...state,
        "tmpTarget": action.value
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_NAME':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('name')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_LEVEL':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('level')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_TYPE':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('type')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_ISTIMING':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('isTiming')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_ISCOMPLETED':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('isCompleted')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_ISREPEATING':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('isRepeating')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_CREATEDATE':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('createDate')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_COMPLETEDATE':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('completeDate')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_STARTDATE':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('startDate')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_ENDDATE':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('endDate')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_MINDATE':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('minDate')
      }
    case 'MODIFY_INNERSTATE_TMPTARGET_MAXDATE':
      return {
        ...state,
        "tmpTarget": getNewTmpTarget('maxDate')
      }
  }

  return state
}

export default innerState