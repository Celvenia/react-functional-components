import BulbasaurImg from "./images/bulbasaur.jpg";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };
  const imageStyle = {
    height: "400px",
    width: "400px",
    borderRadius: "50%"
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={BulbasaurImg} alt={favPokemon} style={imageStyle} />
      <h2>
        Bulbasaur's type is <span> {pokeCharacteristics.type} </span> and one of
        their moves is <span> {pokeCharacteristics.move} </span>
      </h2>
    </div>
  );
}

export default Showcase;
