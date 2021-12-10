// checks Local Storage for user items.
// if there is a logged in user with accesstoken (JWT), return http Authorization header
// otherwise, return an empty object.
export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    //return { Authorization: 'Bearer ' + user.accessToken };
    // for Node.js Express back-end: 
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  } 
}
