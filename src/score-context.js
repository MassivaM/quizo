import * as React from "react";

const ScoreContext = React.createContext({ score: 0 });

function ScoreReducer(state, action) {
  switch (action.type) {
    case "increment": {
      return { score: state.score + 1 };
    }
    case "decrement": {
      return { score: state.score - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ScoreProvider({ children }) {
  const [state, dispatch] = React.useReducer(ScoreReducer, { score: 0 });

  const value = { state, dispatch };
  return (
    <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
  );
}
function useScore() {
  const context = React.useContext(ScoreContext);
  if (context === undefined) {
    throw new Error("useScore must be used within a ScoreProvider");
  }
  return context;
}
export { ScoreProvider, useScore };
