function Pokemon(props) {
  return (
    <li>
      <img src={props.item.url} alt="{props.item.name}" />
      <h3>{props.item.name}</h3>
      <p>{props.item.types}</p>
    </li>
  );
}
export { Pokemon };
