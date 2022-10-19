import axios from 'axios';

const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const BikesApiClient = {
  getBikesData: async () => {
    const { data } = await axios.get('/dublinbikes-api/last_snapshot/', {
      headers: HEADERS,
    });

    console.log('bikes data', data);
    return data;
  },
};

export default BikesApiClient;
