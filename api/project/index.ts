import api from '..';

export const getAllProject = (params: any) => api.get('/project', { params: params});

export const getDetailProject = (id: any) => api.get(`/project/${id}`);