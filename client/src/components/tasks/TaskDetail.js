import React, {useState} from 'react';
import { List, Button } from "semantic-ui-react";

import EditTask from './actions/EditTask';
import DeleteTask from './actions/DeleteTask';
import TaskCheckbox from './actions/TaskCheckbox';

const TaskDetail = ({task, folderId, updateTasks}) => {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const hideModal = () => {
        setModalIsVisible(false);
    }

    return (
        <List.Content id="outer">
            <TaskCheckbox 
                        className="inner"
                        task={task}
                        folderId={folderId}
                        updateTasks={updateTasks}
            />
            <div className="inner">
                {task.description}                
            </div>
            
            <EditTask 
                        task={task}
                        folderId={folderId}
                        showModal = {modalIsVisible}
                        hideModal = {hideModal}
                        updateTasks = {updateTasks}            
            />

            <DeleteTask 
                        taskId={task.id}
                        folderId={folderId}
                        updateTasks={updateTasks}
            />

            <Button     
                        className="task_menu_button"
                        icon="edit outline" 
                        size="mini" 
                        color="facebook"
                        onClick={() => setModalIsVisible(true)}
            />
            
            
            
            
                        
        </List.Content>
    )
}

export default TaskDetail;