const initGlobalState = {
  isLoading: false,
  isPage: 1,
}

export const globalReducer = (state = initGlobalState, action: any) => {
  switch (action.type) {
    case 'SET_LOADING': {
      return {...state, isLoading: action.value};
    }
  }
  switch (action.type) {
    case 'SET_PAGE': {
      return { ...state, isPage: action.value };
    }
  }

  return state;
}