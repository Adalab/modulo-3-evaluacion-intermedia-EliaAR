import { Pokemon } from "./Pokemon";

function PokeList(props) {
  return (
    <ul>
      {props.Pokemons.map((item) => (
        <Pokemon item={item} key={item.id} />
      ))}
      )
    </ul>
  );
}

export { PokeList };
