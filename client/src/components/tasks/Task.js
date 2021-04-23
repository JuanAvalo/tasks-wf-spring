import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './tasks.css';
import TaskList from './TaskList';
import AddTask from './actions/AddTask';
import Loading from '../handlers/loading';
import ErrorMessage from '../handlers/error';
import { API_POINT } from '../../lib/constants';

const Task = ({ folder }) => {
  const [tasks, setTasks] = useState([]);
  const [taskWasAdded, setTaskWasAdded] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //GET folders from DB.
  
  useEffect(() => {
    const getTasks = async () => {
      try {
        setError(false);
        setLoading(true);

        const result = await axios(API_POINT + `/users/1/folders/${folder.id}`);
        setTasks(result.data.tasks);
      } catch (error) {
        setError(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    getTasks();
  }, [taskWasAdded]);

  const updateTasks = () => {
    setTaskWasAdded(!taskWasAdded);
  };

  if (error) return <ErrorMessage />;
  if (loading) return <Loading />;

  return (
    <div>
      <TaskList tasks={tasks} folderId={folder.id} updateTasks={updateTasks} />
      <AddTask updateTasks={updateTasks} folderId={folder.id} />
    </div>
  );
};

export default Task;
