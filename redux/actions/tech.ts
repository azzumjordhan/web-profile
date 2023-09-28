import { getAllTech, getTechCategory } from "@/api/tech"
import { setLoading } from "./global";

export const getTechStack = (payload: any) => async (dispatch: any) => {
  try {
    const response = await getAllTech(payload);
    dispatch({ type: "GET_ALL_TECH", value: response?.data?.data });
    dispatch(setLoading(false));
  } catch {
    dispatch({ type: "GET_ALL_TECH", value: []});
    dispatch(setLoading(false));
  }
}

export const getTechByCategory = () => async (dispatch: any) => {
  try {
    const response = await getTechCategory();
    dispatch({ type: "GET_CATEGORY_TECH", value: response?.data?.data });
    dispatch(setLoading(false));
  } catch {
    dispatch({ type: "GET_CATEGORY_TECH", value: []});
    dispatch(setLoading(false));
  }
}