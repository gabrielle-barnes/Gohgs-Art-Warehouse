import placeholder from "../public/docs/placeholder.png";
import realgogh from "../public/docs/realgogh.png";

export default function Canvas({ info }) {
  return (
    <section>
      <header>
        <h1>{info.title || "Title not available"}</h1>
      </header>
      <info>
        <p>
          Artist: {info.artistDisplayName || "Artist not available"} <br />
          Biography: {info.artistDisplayBio || "Biography not available"} <br />
          Culture: {info.culture || "Culture not available"} <br />
          Time Period: {info.period || "Time period not available"}
        </p>
      </info>
      <p>
        {info.primaryImageSmall ? (
          <img src={info.primaryImageSmall} alt="Art piece image" />
        ) : (
          <img src={placeholder} />
        )}
      </p>
      <footer>
        <figure class="flowers">
          <img src={realgogh} alt="flowers" />
        </figure>
        <a href="https://codesandbox.io/p/sandbox/gohgs-art-warehouse-38xpn6">
          Code Sandbox Source Code
        </a>
      </footer>
    </section>
  );
}
