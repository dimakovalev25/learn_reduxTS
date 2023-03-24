export interface todosState {
    todos: any[];
    loading: boolean;
    error: null | string;
}

export enum TodosActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR'
}

interface fetchTodosAction {
    type: TodosActionTypes.FETCH_TODOS;
}

interface fetchTodosSuccessAction {
    type: TodosActionTypes.FETCH_TODOS_SUCCESS;
    payload: any[];

}

interface fetchTodosErrorAction {
    type: TodosActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}

export type TodosAction = fetchTodosAction | fetchTodosErrorAction | fetchTodosSuccessAction