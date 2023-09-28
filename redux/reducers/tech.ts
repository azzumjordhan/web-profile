const initTechState = {
  dataTechStack: [],
  dataCategoryTech: [],
}

export const techReducer = (state = initTechState, action: any) => {
  switch (action.type) {
    case "GET_ALL_TECH": {
      return { ...state, dataTechStack: action.value };
    }
    case "GET_CATEGORY_TECH": {
      return { ...state, dataCategoryTech: action.value };
    }
  }
  return state;
}