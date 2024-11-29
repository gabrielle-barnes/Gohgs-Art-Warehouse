export default function Selector({ action }) {
  function randomArt() {
    let artNumber = Math.floor(Math.random() * 49068) + 1;
    action(artNumber);
  }
  return <button onClick={randomArt}>Get Random Art Piece</button>;
}
