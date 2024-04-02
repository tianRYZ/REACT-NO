import * as actionTypes from './constant'
import findIndex from "lodash/findIndex"

const initialState = {
  collect: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.COLLECT:
      return {
        ...state,
        collect: [...state.collect, action.collect]
      };
    case actionTypes.UNCOLLECT:
      const currentIndex = findIndex(state.collect, item => item === action.id);
      if (currentIndex === -1) {
        return state; // 如果未找到要删除的元素，则返回原始状态
      }
      return {
        ...state,
        collect: [
          ...state.collect.slice(0, currentIndex),
          ...state.collect.slice(currentIndex + 1)
        ]
      };
    default:
      return state;
  }
}

export default reducer