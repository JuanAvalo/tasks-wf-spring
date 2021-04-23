import axios from 'axios';
import { API_POINT } from '../../../lib/constants';

const updateTask = (taskId, folderId, updateFunction, newContent) => {
  if (newContent.length === 0) console.log('Add something to the task.');
  else {
    
    axios
      .put(API_POINT + `/users/1/folders/${folderId}/tasks/${taskId}/edit`, {
        description:newContent
      })
      .then((response) => {
        console.log('Response: ' + JSON.stringify(response));
        updateFunction();
      })
      .catch((error) => {
        console.log('Error: ' + error);
      });
  }
};

export default updateTask;
