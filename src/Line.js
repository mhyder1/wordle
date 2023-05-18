import Tile from "./Tile";
export default function Line() {
  return (
    <div className="line">
      {Array(5).fill(0).map((letter, index) => (
        <Tile key={index}  />
      ))}
    </div>
  );
}
