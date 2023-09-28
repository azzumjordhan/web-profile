import { getAllProject, getDetailProject } from "@/api/project";
import { localStorageMixins } from "@/mixins/localStorage.mixin";
import { setLoading } from "./global";

export const getProject = (value: any) => async (dispatch: any) => {
  try {
    const response = await getAllProject(value);
    console.log(response)
    dispatch({ type: "GET_PROJECT_ALL", value: response?.data?.data });
    dispatch(setLoading(false));
  } catch (error: any) {
    dispatch({ type: "GET_PROJECT_ALL", value: [] });
    dispatch(setLoading(false));
  }
};

export const getDetailDataProject = (id: any) => async (dispatch: any) => {
  try {
    const response = await getDetailProject(id);
    dispatch({ type: "GET_DETAIL_PROJECT", value: response.data });
    dispatch(setLoading(false));
  } catch (error: any) {
    const data = error?.response?.status ?? "no internet";
    dispatch({ type: "GET_DETAIL_PROJECT", value: data });
    dispatch(setLoading(false));
  }
};
