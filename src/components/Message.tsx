export const Message = () => {
  const modifiers = [
    "",
    "primary",
    "link",
    "info",
    "success",
    "warning",
    "danger",
  ];

  return (
    <section className="section" id="message">
      <div className="columns is-multiline">
        {modifiers.map((m, index) => (
          <div key={index} className="column is-half">
            <article className={`message ${m ? `is-${m}` : ""}`}>
              <div className="message-header">
                <p>{m ? m.charAt(0).toUpperCase() + m.slice(1) : "Message"}</p>
                <button className="delete"></button>
              </div>
              <div className="message-body">
                In the tapestry of life, each thread weaves a unique story.{" "}
                <strong>Our choices, big and small</strong>, color the fabric of
                our journey. With every step, we paint our path forward, leaving
                behind a trail of memories. It's in the quiet moments that we
                find
                <a>our true selves</a>, reflecting on the past and dreaming of{" "}
                <em>future adventures</em>.
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};
