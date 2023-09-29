import { getDashboardArticle, getDashboardProject, getDashboardTech } from "@/api/dashboard";
import { setLoading } from "./global";

export const getTechDashboard = () => async (dispatch: any) => {
  try {
    const response = await getDashboardTech();
    dispatch({type: 'GET_TECH_DASHBOARD', value: response?.data?.data});
    dispatch(setLoading(false));
  } catch {
    dispatch({type: 'GET_TECH_DASHBOARD', value: []});
    dispatch(setLoading(false));
  }
}

export const getArticleDashboard = () => async (dispatch: any) => {
  try {
    const response = await getDashboardArticle();
    dispatch({ type: "GET_ARTICLE_DASHBOARD", value: response?.data });
    dispatch(setLoading(false));
  } catch {
    dispatch({ type: "GET_ARTICLE_DASHBOARD", value: [] });
    dispatch(setLoading(false));
  }
};

export const getProjectDashboard = () => async (dispatch: any) => {
  try {
    const response = await getDashboardProject();
    dispatch({ type: "GET_PROJECT_DASHBOARD", value: response?.data });
    dispatch(setLoading(false));
  } catch {
    dispatch({ type: "GET_PROJECT_DASHBOARD", value: [] });
    dispatch(setLoading(false));
  }
};