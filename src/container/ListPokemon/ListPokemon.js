import React, { useState, useEffect, useContext } from "react";
import "./ListPokemon.scss";
import PokemonCard from "../../components/PokemonCard";
import { MyPokemonsContext } from "../../context/MyPokemonsContext";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../../graphql/Queries";
import TablePagination from "@material-ui/core/TablePagination";

const ListPokemon = () => {
  const [page, setPage] = useState(0);

  const [limit, setLimit] = useState(20);

  const [offset, setOffset] = useState(0);

  const { error, loading, data } = useQuery(GET_POKEMONS, {
    variables: { limit: limit, offset: offset },
  });

  const getCount = () => {
    if (data) return data.pokemons.count;
  };

  const handlePageChange = (event, newPage) => {
    setOffset(limit * (newPage));
    setPage(newPage);
  };

  const handleChangeRowPerPage = (event) => {
    setLimit(parseInt(event.target.value, 10));
    handlePageChange(0, 0);
  };

  const { myPokemons } = useContext(MyPokemonsContext);

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    if (data) {
      setPokemons(data.pokemons.results);
      console.log("useEffect");
    }
  }, [data, limit, offset]);

  const getOwned = (name) => {
    let count = 0;
    for (let i = 0; i < myPokemons.length; i++) {
      if (myPokemons[i].name === name) count++;
    }
    return count;
  };

  return (
    <>
      <div className="list-pokemon">
        {pokemons.map((pokemon) => (
          <PokemonCard
            name={pokemon.name}
            owned={getOwned(pokemon.name)}
            from={"list"}
          />
        ))}
        <div className="pagination">
          <TablePagination
            rowsPerPageOptions={[5, 10, 20, 50, 100]}
            component="div"
            count={getCount()}
            page={page}
            onChangePage={handlePageChange}
            rowsPerPage={limit}
            onChangeRowsPerPage={handleChangeRowPerPage}
          />
        </div>
      </div>
    </>
  );
};

export default ListPokemon;
