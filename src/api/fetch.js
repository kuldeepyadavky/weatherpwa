import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f67960a1a2b2496d6f4f5d953a14040f'; // create an api key by registrating on the website
export const fetch = async (query) => {
  const { data } = await axios.get(url, {
    params: {
      q: query,
      units: 'metric',
      APPID: apiKey,
    },
  });

  return data;
};
