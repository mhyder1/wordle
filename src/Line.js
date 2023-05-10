import Tile from "./Tile";
export default function Line({ word }) {
  return (
    <div className="line">
      {word.split("").map((letter, index) => (
        <Tile key={index} />
      ))}
    </div>
  );
}
