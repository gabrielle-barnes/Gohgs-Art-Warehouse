import { useState, useEffect } from "react";
import Selector from "./Selector";
import Canvas from "./Canvas";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState(100);
  const [data, setData] = useState({});

  function fetchNewArt() {
    const n = encodeURIComponent(number);
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${n}`;

    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r));
  }

  useEffect(fetchNewArt, [number]);

  return (
    <div className="App">
      <Selector action={setNumber} />
      <Canvas info={data} />
    </div>
  );
}
