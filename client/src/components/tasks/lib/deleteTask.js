import axios from 'axios';
import { API_POINT } from '../../../lib/constants';

const deleteTask = (taskId, folderId, updateFunction) => {
  axios
    .delete(API_POINT + `/users/1/folders/${folderId}/tasks/${taskId}/delete`)
    .then((response) => {
      console.log('Response: ' + JSON.stringify(response));
      updateFunction();
    })
    .catch((error) => {
      console.log('Error: ' + error);
    });
};

export default deleteTask;