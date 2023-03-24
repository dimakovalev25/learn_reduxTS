import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {fetchUsers} from "../store/actionCreator/user";
import {useActions} from "../hooks/useActions";
// import type {} from 'redux-thunk/extend-redux';

const UserList: FC = () => {

    const {users, error, loading} = useTypeSelector(state => state.user)
    // console.log(users)
    // const dispatch = useDispatch()

    const {fetchUsers} = useActions()

    useEffect(() => {
        // dispatch(fetchUsers() as any)
        fetchUsers()

    }, [])

    if(loading) {
        return <h5>Loading....</h5>
    }

    if(error) {
        return <h1>Error something went wrong</h1>
    }

    return (
        <div>
            <h5>UsersList:</h5>
            {users.map(item =>
            <div>{item.name}</div>)}
        </div>
    );
};

export default UserList;
