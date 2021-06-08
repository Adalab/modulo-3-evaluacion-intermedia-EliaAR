import "../stylesheet/Pokemos.scss";

function Pokemon(props) {
  return (
    <li className="pokemos">
      <img src={props.item.url} alt={props.item.name} />
      <h3 className="pokemos__name">{props.item.name}</h3>
      <p className="pokemos__type">{props.item.types}</p>
    </li>
  );
}
export { Pokemon };
