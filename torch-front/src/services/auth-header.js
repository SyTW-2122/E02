// checks Local Storage for user items.
// if there is a logged in user with accesstoken (JWT), return http Authorization header
// otherwise, return an empty object.
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    return { 'x-access-token': user.accessToken };
  }
  return {};
}
