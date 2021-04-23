import axios from 'axios';
import { API_POINT } from '../../../lib/constants';

const updateTaskState = (taskId, folderId, updateFunction, newState) => {
 
  axios
    .put(API_POINT + `/users/1/folders/${folderId}/tasks/${taskId}/state`, {
      state:newState
    })
    .then((response) => {
      console.log('Response: ' + JSON.stringify(response));
      updateFunction();
    })
    .catch((error) => {
      console.log('Error: ' + error);
    });
};

export default updateTaskState;
