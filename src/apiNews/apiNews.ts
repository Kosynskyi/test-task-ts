import axios from 'axios';

export const getTotalNews = async (): Promise<any> => {
  try {
    const { data } = await axios('news');
    return data.length;
  } catch (error: any) {
    console.log(error.message);
  }
};
