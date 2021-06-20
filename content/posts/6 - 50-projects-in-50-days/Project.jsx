import React from "react";

function Project({ number, title, hash }) {
  return (
    <React.Fragment>
      <iframe
        height="400"
        style={{ width: "100%", marginBottom: 30 }}
        scrolling="no"
        title={`Day ${number} - ${title}`}
        src={`https://codepen.io/giovanileite/embed/${hash}?height=400&theme-id=dark&default-tab=result`}
        frameborder="no"
        loading="lazy"
        allowtransparency="true"
        allowfullscreen="true"
        zoom="0.5"
      >
        See the Pen{" "}
        <a href={`https://codepen.io/giovanileite/pen/${hash}`}>
          Day {number} - {title}
        </a>{" "}
        by Giovani de Sousa Leite (
        <a href="https://codepen.io/giovanileite">@giovanileite</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </React.Fragment>
  );
}

export default Project;
