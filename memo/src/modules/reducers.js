import { ADD_TODO } from "./actions";
import { REMOVE_TODO } from "./actions";

const initState = {
    todos: [
        {todo: "유튜브보기"},
        {todo: "롤하기"},
        {todo: "밥먹기"},
    ]
};
// {
//     type : 명령어
//     todo : 어떤 데이터를 처리해라
// } 
export default function todoApp(state = initState, action) {
   switch (action.type) {
       case ADD_TODO:
       return Object.assign({}, state, {
           todos: [...state.todos, {todo: action.todo}]
                                   // 푸시같은 영역
       });
       case REMOVE_TODO:
       return [
            ...state.slice(0, action.index),
            Object.assign({}, state[action.index], {
                completed: true
            }),
            ...state.slice(action.index + 1)
            ];
       default:
           return state;
   } 
}