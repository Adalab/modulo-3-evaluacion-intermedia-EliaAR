import PropTypes from "prop-types";
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
        {props.item.types.map((type, index) => (
          <span className="pokemos__type" key={index}>
            {type}
          </span>
        ))}
      </p>
    </li>
  );
}
export { Pokemon };

Pokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  pokemon: PropTypes.object,
};
