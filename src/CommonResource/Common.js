let userData = {
    "_id": "karthik@gmail.com",
    "firstName": "Karthik",
    "lastName": "Dulam",
    "phNum": "9133886211",
    "password": "2222",
    "videos_watched": [],
    "subscribed": [],
    "role": "Learner"
}

export const getUser = () => {
  return userData;
};
export const setUser = data => {
  userData = data;
};

//loginStatus
// let login=false;
// export const getLogin = () => {
//   return login;
// };
// export const changeLogin = () => {
//   login=!login
//   console.log(login);
// };

export const baseUrl = "https://edyoda-node-deploy.herokuapp.com";
