import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useActionTodos} from "../hooks/useActions";

const TodosList: FC = () => {

    const {todos, error, loading} = useTypeSelector(state => state.todos)
    console.log(todos)

    const { fetchTodos } = useActionTodos()

    useEffect(() => {
        fetchTodos()
    }, []);

    if(loading) {
        return <h5>Loading....</h5>
    }

    if(error) {
        return <h1>Error something went wrong</h1>
    }

    return (
        <div>
            <h5>Todos list:</h5>

            {todos.map(item =>
            <div>{item.title}</div>
            )}
        </div>
    );
};

export default TodosList;
