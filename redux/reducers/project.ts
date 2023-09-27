const initProjectState = {
  dataProject: [],
};

export const projectReducer = (state = initProjectState, action: any) => {
  switch (action.type) {
    case "GET_PROJECT_ALL": {
      return { ...state, dataProject: action.value };
    }
    case "GET_DETAIL_PROJECT": {
      return { ...state, detailProject: action.value };
    }
  }
  return state;
};
