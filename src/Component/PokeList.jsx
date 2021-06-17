import { Pokemon } from "./Pokemon";

function PokeList(props) {
  return (
    <ul>
      {props.Pokemons.map((item) => (
        <li key={item.id}>
          <Pokemon item={item} />
        </li>
      ))}
      )
    </ul>
  );
}

export { PokeList };
