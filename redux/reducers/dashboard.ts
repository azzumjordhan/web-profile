const initDashboardState = {
  dashboardTech: [],
  dashboardArticle: [],
  dashboardProject: [],
};

export const dashboardReducer = (
  state = initDashboardState,
  action: any
) => {
  switch (action.type) {
    case "GET_TECH_DASHBOARD": {
      return { ...state, dashboardTech: action.value };
    }
    case "GET_ARTICLE_DASHBOARD": {
      return { ...state, dashboardArticle: action.value };
    }
    case "GET_PROJECT_DASHBOARD": {
      return { ...state, dashboardProject: action.value };
    }
  }
  return state;
};

// export const dashboardArticleReducer = (
//   state = initDashboardState,
//   action: any
// ) => {
//   switch (action.type) {
//     case "GET_ARTICLE_DASHBOARD": {
//       return { ...state, dashboardArticle: action.value };
//     }
//   }
//   return state;
// };

// export const dashboardProjectReducer = (
//   state = initDashboardState,
//   action: any
// ) => {
//   switch (action.type) {
//     case "GET_PROJECT_DASHBOARD": {
//       return { ...state, dashboardTech: action.value };
//     }
//   }
//   return state;
// };
