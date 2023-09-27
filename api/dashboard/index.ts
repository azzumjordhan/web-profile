import api from '..';

export const getDashboardTech = () => api.get('/dashboard/tech');

export const getDashboardArticle = () => api.get('/dashboard/article');

export const getDashboardProject = () => api.get('/dashboard/project');