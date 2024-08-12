export const Panel = () => {
  return (
    <section className="section" id="panel">
      <div className="column is-4">
        <nav className="panel">
          <p className="panel-heading"> Repositories </p>
          <div className="panel-block">
            <p className="control has-icons-left">
              <input
                className="input is-small"
                type="text"
                placeholder="Search"
              />
            </p>
          </div>
          <p className="panel-tabs" style={{ overflow: "hidden" }}>
            <a className="is-active">All</a>
            <a>Public</a>
            <a>Private</a>
            <a>Sources</a>
            <a>Forks</a>
          </p>
          <a className="panel-block is-active">bulma </a>
          <a className="panel-block">marksheet </a>
          <a className="panel-block">minireset.css </a>
          <a className="panel-block">jgthms.github.io </a>
          <a className="panel-block">daniellowtw/infBoard </a>
          <a className="panel-block">mojs </a>
          <label className="panel-block">
            <input type="checkbox" /> Remember me{" "}
          </label>
          <div className="panel-block">
            <button className="button is-primary is-outlined is-fullwidth">
              {" "}
              Reset all filters{" "}
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
};
