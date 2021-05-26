let userData = {
  _id: "karthik@edyoda.com",
  video: [],
  firstName: "Karthik",
  lastName: "Dulam",
  phNum: "9999999999",
  password: "22222"
};

export const getUser = () => {
  return userData;
};
export const setUser = data => {
  userData = data;
};
export const baseUrl = "https://edyoda-node-deploy.herokuapp.com";
