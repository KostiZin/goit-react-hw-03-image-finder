import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchPictures = async (query, page) => {
  const resp = await axios.get(
    `/?q=${query}&page=${page}&key=38838626-f67f5166ce5e35c3d0676c4b5&image_type=photo&orientation=horizontal&per_page=12`
  );
  return resp.data;
};
