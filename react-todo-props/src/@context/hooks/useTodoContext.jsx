import React from "react";

const TodoContext = React.createContext(undefined);

export const TodoProvider = ({children, value}) => {
    return (<TodoContext.Provider value={value}>{children}</TodoContext.Provider>)
}

export const useTodoContext = () => {
    const context = React.useContext(TodoContext);

    if (context === undefined) {
        throw new Error();
    }

    return context;
}
