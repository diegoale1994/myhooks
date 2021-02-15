export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            return state.filter(t => t.id !== action.payload);
        case 'toggle-old':
            return state.map(t => {
                if (t.id == action.payload) {
                    return { ...t, done: !t.done };
                } else {
                    return t;
                }
            })
        case 'toggle':
            return state.map(todo =>
                (todo.id === action.payload)
                    ? { ...todo, done: !todo.done }
                    : todo);
        default:
            return state;
    }

}