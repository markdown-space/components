export const Progress = () => {
  const modifiers = [
    "primary",
    "link",
    "info",
    "success",
    "warning",
    "danger",
    "dark",
  ];

  return (
    <section className="section" id="progress">
      {modifiers.slice(0, 7).map((modifier, index) => (
        <progress
          key={index}
          className={`progress ${modifier !== "" ? `is-${modifier}` : ""}`}
          max="100"
          value="15"
        >
          15%
        </progress>
      ))}
      <progress className="progress is-small" max="100" value="15">
        15%
      </progress>
      <progress className="progress" max="100" value="30">
        30%
      </progress>
      <progress className="progress is-medium" max="100" value="45">
        45%
      </progress>
      <progress className="progress is-large" max="100" value="60">
        60%
      </progress>
      <h2 className="title is-2">Indeterminate</h2>
      <progress className="progress is-small is-primary" max="100">
        15%
      </progress>
      <progress className="progress is-danger" max="100">
        30%
      </progress>
      <progress className="progress is-medium is-dark" max="100">
        45%
      </progress>
      <progress className="progress is-large is-info" max="100">
        60%
      </progress>
    </section>
  );
};
