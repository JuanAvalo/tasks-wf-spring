import React from 'react';
import { List } from "semantic-ui-react";

import TaskDetail from './TaskDetail';

const TaskList = ({tasks, folderId, updateTasks}) => {

    const renderTaskList = tasks.map(task => {
        return (
            <List.Item key={task.id}>
                <TaskDetail 
                            task={task}
                            folderId={folderId}
                            updateTasks={updateTasks}
                />
            </List.Item>
        )             
    })

    return(
       
        <List className="tasks_list">
            {renderTaskList}
        </List>
    )
}
export default TaskList;