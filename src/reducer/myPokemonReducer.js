export const myPokemonReducer = (state, action) => {
  switch (action.type) {
    case "CATCH":
      return [...state, action.pokemon];
    case "RELEASE":
      return state.filter((pokemon) => pokemon.nickname !== action.nickname);
    default:
      return state;
  }
};
