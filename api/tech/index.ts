import api from '..';

export const getAllTech = (params: any) => api.get('/tech', { params: params });

export const getTechCategory = () => api.get('/tech/category');