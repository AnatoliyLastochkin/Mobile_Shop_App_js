const API_URL = 'https://anatoliylastochkin.github.io/Mobile_Shop_App_js/api/phones';

export const getAll = async () => {
  try {
    const response = await fetch(`${API_URL}.json`);
    const data = response.json();
    return  data;
  }catch (e) {
    return [];
  }
};

export const getById = async (phoneId) => {
  try{
    const response = await fetch(`${API_URL}/${phoneId}.json`);
    const data = response.json();
    return data;
  }catch (e) {
    return 0;
  }
};