import axios from 'axios';
import { API_POINT } from '../../../lib/constants';

const newTask = (folderId, content, updateFunction) => {
  if (content.length === 0) console.log('Add something to the task.');
  else {
    
    axios
      .post(API_POINT + `/users/1/folders/${folderId}/tasks/create`, {
        description:content
      })
      .then((response) => {
        console.log('Response: ' + JSON.stringify(response));
        updateFunction(); //Re-Render the tasks component to update the list.
      })
      .catch((error) => {
        console.log('Error: ' + error);
      });
  }
};
export default newTask;
