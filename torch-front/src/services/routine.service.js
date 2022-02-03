import axios from 'axios';

const API_URL = process.env.VUE_APP_ROUTINEAPIURL;
class RoutineService {
  all = (username) => axios
    .get(`${API_URL}${username}/routines`)
    .then((response) => response.data);

  fetchByID = (username, routineID) => axios
    .get(`${API_URL}${username}/routines/${routineID}`)
    .then((response) => response.data);

  createRoutine = (username, routine) => axios
    .post(`${API_URL}createroutine/${username}`, {
      name: routine.name,
      description: routine.description,
      image: routine.image,
    })
    .then((response) => response.data);

  editRoutine = (username, routineID, routine) => axios
    .put(`${API_URL}editroutine/${username}/${routineID}`, {
      name: routine.name,
      ratings: routine.ratings,
      comments: routine.comments,
      image: routine.image,
      description: routine.description,
      likes: routine.likes,
      exercises: routine.exercises,
    })
    .then((response) => response.data);

  deleteRoutine = (username, routineID) => axios
    .delete(`${API_URL}${username}/${routineID}`)
    .then((response) => response.data);
}

export default new RoutineService();
