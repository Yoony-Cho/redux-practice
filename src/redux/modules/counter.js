// src/modules/counter.js
const Add_NUM = "Add_NUM";
const MINUS_NUM = "MINUS_NUM";
export const addNum = (payload) => { 
    return {
        type: Add_NUM, // type에는 위에서 만든 상수로 사용 (vscode에서 자동완성 지원)
        payload: payload,
    };
};
export const minusNum = (payload) => { 
    return {
        type: MINUS_NUM, // type에는 위에서 만든 상수로 사용 (vscode에서 자동완성 지원)
        payload: payload,
    };
};

// 초기 상태값
const initialState = {
    number: 0,
  };
  // 리듀서
  const counter = (state = initialState, action) => {
    switch (action.type) {
        case "Add_NUM":
            return{
                number: state.number+action.payload,   
            }
        case "MINUS_NUM":
            return{
                number: state.number-action.payload,   
            }
        default:
            return state;
    }
  };
  // 모듈파일에서는 리듀서를 export default 한다.
  export default counter;