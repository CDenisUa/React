import React from 'react';
import UserContainerTodo from '../user-container-todo/UserContainerTodo';
import UserInformation from '../user-information/UserInformation';
import UserToDo from '../user-to-do/UserToDo';

const HooksTodoContainer = () => (
    <UserContainerTodo title='My todo list:'>
        <UserInformation userName='Chepiga Denis' userAge='32' />
        <UserToDo />
    </UserContainerTodo>
);

export default HooksTodoContainer;