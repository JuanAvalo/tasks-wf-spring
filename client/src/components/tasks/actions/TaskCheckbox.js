import React from 'react';
import {Checkbox} from "semantic-ui-react";

import updateTaskState from '../lib/updateTaskState';

const TaskCheckbox = ({task, folderId, updateTasks}) => {

    const handleCheck = () => {
        updateTaskState( task.id, folderId, updateTasks, !task.state )
        console.log(task.state)
    }

    return <Checkbox 
                    checked={task.state}
                    onClick={()=> handleCheck()}
            />
}

export default TaskCheckbox;