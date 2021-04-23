import axios from 'axios';
import { API_POINT } from '../../../lib/constants';

const newFolder = (userId, name, updateFunction) => {
  if (name.length === 0) console.log('Add something to the task.');
  else {
    
    axios    
      .post(API_POINT + `/users/${userId}/folders/create`, {
        name:name
      })
      .then((response) => {
        console.log('Response: ' + JSON.stringify(response));
        updateFunction(); //Re-Render the folders component to update the list.
      })
      .catch((error) => {
        console.log('Error: ' + error);
      });
  }
};
export default newFolder;
