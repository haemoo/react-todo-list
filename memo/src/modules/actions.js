//action type
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

//action creator
export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo: todo
    };
}

export function removeTodo(todo) {
    return {
        type: REMOVE_TODO,
        todo: todo
    };
}