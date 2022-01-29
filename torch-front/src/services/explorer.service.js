import axios from 'axios';

const API_URL = process.VUE_APP_USERAPIURL;

class ExplorerService {
  getRandomUsers = () => {
    const response = axios.get(API_URL);
    let showUsersAmount = 3;
    if (response.data.length < 3) {
      showUsersAmount = response.data.length;
    }
    const randomArray = [];
    while (randomArray.length !== showUsersAmount) {
      const newNum = Math.floor(Math.random() * response.data.length);
      if (!randomArray.includes(newNum)) {
        randomArray.push(newNum);
      }
    }
    const save = [];
    randomArray.forEach((element) => {
      save.push(response.data[element]);
    });
  }
}

export default new ExplorerService();
