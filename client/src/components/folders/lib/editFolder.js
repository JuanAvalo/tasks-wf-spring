import axios from 'axios';
import { API_POINT } from '../../../lib/constants';

const updateFolder = (userId, folderId, updateFunction, newContent) => {
  if (newContent.length === 0) console.log('Add something to the folder name.');
  else {
    
    axios
      .put(API_POINT + `/users/${userId}/folders/${folderId}/edit`, {
        name:newContent
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

export default updateFolder;
