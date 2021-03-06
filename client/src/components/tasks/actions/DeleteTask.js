import React from 'react';
import { Button } from "semantic-ui-react";

import deleteTask from '../lib/deleteTask';

const DeleteTask = ({taskId, folderId, updateTasks}) => {
    const handleDelete = () => {
        deleteTask(taskId, folderId, updateTasks);
    }

    return (
        <Button     
            className="task_menu_button"        
            onClick={() => {handleDelete()}}
            size="mini"
            icon="trash alternate outline"
            color="youtube"
        />
    )
}

export default DeleteTask;