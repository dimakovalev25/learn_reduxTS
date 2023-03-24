import {Dispatch} from "redux";
import {TodosAction, TodosActionTypes} from "../../types/todos";
import axios from "axios";


export const fetchTodos = () => {
    return async (dispatch: Dispatch<TodosAction>) => {
        try {
            dispatch({type: TodosActionTypes.FETCH_TODOS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=14')
            dispatch({type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})

        } catch (e) {
            dispatch({type: TodosActionTypes.FETCH_TODOS_ERROR, payload: 'Error!!'})
        }
    }
}