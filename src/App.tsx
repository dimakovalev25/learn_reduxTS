import React from 'react';
import UserList from "./components/UserList";
import TodosList from "./components/TodosList";

function App() {

    return (
        <div className="App">
            <h3>reduxTS</h3>
            <UserList/>
            <TodosList/>

        </div>
    );
}

export default App;
