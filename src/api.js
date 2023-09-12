import axios from "axios";
const API_URL = "https://www.googleapis.com/books/v1/volumes?";
const API_KEY = "AIzaSyCiIFk4F8h-4wEqhoKcQ2xStso1h33n69A";

const getBooks = async query => {
  const params = {
    q: query,
    key: API_KEY,
  };
  const request = await axios.get(API_URL, { params });

  return request.data;
};

export default getBooks;
