import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as UserActionCreators from '../store/actionCreator/user'
import * as TodosActionCreator from '../store/actionCreator/todos'



export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(UserActionCreators, dispatch)
}

export const useActionTodos = () => {
    const dispatch = useDispatch()
    return bindActionCreators(TodosActionCreator, dispatch)
}