export const Tag = () => {
  const modifiers = [
    "",
    "primary",
    "link",
    "info",
    "success",
    "warning",
    "danger",
    "dark",
  ];

  return (
    <section className="section" id="tag">
      <h1 className="title">Tag</h1>
      <hr />
      <div className="tags">
        {modifiers.slice(1).map((modifier, index) => (
          <span
            key={index}
            className={`tag ${modifier !== "" ? `is-${modifier}` : ""}`}
          >
            {modifier.charAt(0).toUpperCase() + modifier.slice(1)}
          </span>
        ))}
        <span className="tag is-primary is-medium">Medium</span>
        <span className="tag is-info is-large">Large</span>
        <span className="tag is-success">
          Bar
          <button className="delete is-small"></button>
        </span>
        <span className="tag is-warning is-medium">
          Hello
          <button className="delete is-small"></button>
        </span>
        <span className="tag is-danger is-large">
          World
          <button className="delete"></button>
        </span>
      </div>
      <div className="field is-grouped is-grouped-multiline">
        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-dark">npm</span>
            <span className="tag is-info">0.5.0</span>
          </div>
        </div>
        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-dark">build</span>
            <span className="tag is-success">passing</span>
          </div>
        </div>
        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-dark">chat</span>
            <span className="tag is-primary">on gitter</span>
          </div>
        </div>
      </div>
      <div className="field is-grouped is-grouped-multiline">
        {[
          "Technology",
          "CSS",
          "Flexbox",
          "Web Design",
          "Open Source",
          "Community",
          "Documentation",
        ].map((tag, index) => (
          <div key={index} className="control">
            <div className="tags has-addons">
              <a className="tag is-link">{tag}</a>
              <a className="tag is-delete"></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
