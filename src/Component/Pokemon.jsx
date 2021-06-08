import "../stylesheet/Pokemos.scss";

function Pokemon(props) {
  return (
    <li className="pokemos">
      <img
        className="pokemos__img"
        src={props.item.url}
        alt={props.item.name}
      />
      <h3 className="pokemos__name">{props.item.name}</h3>
      <p className="pokemos__types">
        {props.item.types.map((type) => (
          <li className="pokemos__type">{type}</li>
        ))}
      </p>
    </li>
  );
}
export { Pokemon };
