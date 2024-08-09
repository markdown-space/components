export const Notifications = () => {
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
    <section className="section" id="notifications">
      <h1 className="title">Notifications</h1>
      <hr />
      <div className="columns is-multiline">
        {modifiers.slice(0, 7).map((m, index) => (
          <div key={index} className="column is-half">
            <div className={`notification ${m !== "" ? `is-${m}` : ""}`}>
              <button className="delete"></button>I am enough of an artist to
              draw freely upon my imagination. Imagination is more important
              than knowledge. Knowledge is limited.
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
