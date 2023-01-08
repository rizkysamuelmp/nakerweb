export const SET_LOADING = "SET_LOADING";

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const getPokemonData = (history) => {
  // const all = { limit: 70, offset: 0 };
  // return async (dispatch) => {
  //   dispatch(setLoading(true));
  //   getDataPokemon(all)
  //     .then(({ data }) => {
  //       const listPokemon = data.results?.map((item) => ({
  //         ...item,
  //         total: history
  //           .filter((el) => item.name === el.name)
  //           .sort((x, y) => {
  //             return x.date < y.date ? 1 : -1;
  //           })[0]?.total,
  //       }));
  //       dispatch(setPokemons(listPokemon));
  //       localStorage.setItem("listPokemon", JSON.stringify(listPokemon));
  //     })
  //     .catch((err) => {});
  // };
};
