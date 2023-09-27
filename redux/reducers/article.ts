const initArticleState = {
  dataArticle: [],
};

export const articleReducer = (state = initArticleState, action: any) => {
  switch (action.type) {
    case "GET_ALL_ARTICLE": {
      return { ...state, dataArticle: action.value };
    }
    case "GET_DETAIL_ARTICLE": {
      return { ...state, detailArticle: action.value };
    }
  }
  return state;
};
