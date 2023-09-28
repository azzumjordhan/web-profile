import { getAllArticle, getDetailArticle } from "@/api/article";
import { setLoading } from "./global";

export const getArticle = (value: any) => async (dispatch: any) => {
  try {
    const response = await getAllArticle(value);
    dispatch({ type: "GET_ALL_ARTICLE", value: response?.data?.data });
    dispatch(setLoading(false));
  } catch {
    dispatch({ type: "GET_ALL_ARTICLE", value: [] });
    dispatch(setLoading(false));
  }
};

export const getDetailDataArticle = (id: any) => async (dispatch: any) => {
  try {
    const response = await getDetailArticle(id);
    dispatch({ type: "GET_DETAIL_ARTICLE", value: response?.data });
    dispatch(setLoading(false));
  } catch (error: any) {
    const data = error?.response?.status ?? "no internet";
    dispatch({ type: "GET_DETAIL_ARTICLE", value: data });
    dispatch(setLoading(false));
  }
};
