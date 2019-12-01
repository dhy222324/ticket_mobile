import { fromJS } from "immutable";
// 属于store部分

const defaultState = fromJS({  });
// 设置数据使用 fromJS进行深度转换
export default (state = defaultState, action) => {
  switch (action.type) {
  
    default:
      return state;
  }
};
