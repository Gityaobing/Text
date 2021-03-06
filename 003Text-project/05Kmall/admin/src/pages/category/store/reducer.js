import * as types from './actionTypes.js'
import { fromJS } from 'immutable'
const defaultState = fromJS({
	list:[],
	current:0,
	pageSize:0,
	total:0,
	isFecthing:false,
	categories:[]
})
export default (state=defaultState,action)=>{
	if(action.type == types.SET_PAGE){
		return state.merge({
			list:fromJS(action.payload.list),
			current:action.payload.current,
			pageSize:action.payload.pageSize,
			total:action.payload.total,
			isFecthing:action.payload.isFecthing
		})
	}
	if(action.type == types.PAGE_REQEST_START){
		return state.set('isFecthing',true)
	}
	if(action.type == types.PAGE_REQEST_END){
		return state.set('isFecthing',false)
	}
	if (action.type == types.SET_CATEGORY_LEVEL) {
		return state.set('categories',fromJS(action.payload))
	}
	return state
}