import api from '..';

export const getAllArticle = (params: any) => api.get('/article', { params: params})

export const getDetailArticle = (id: any) => api.get(`/article/${id}`);