import axios from "axios";
const apiUrl = "https://www.googleapis.com/books/v1/volumes?";
const apiKey = "AIzaSyCiIFk4F8h-4wEqhoKcQ2xStso1h33n69A";

const getBooks = async query => {
  const params = {
    q: query,
    key: apiKey,
  };
  const request = await axios.get(apiUrl, { params });

  return request.data;
};

export default getBooks;
