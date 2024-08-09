export const Card = () => {
  return (
    <section className="section" id="card">
      <h1 className="title">Card</h1>
      <hr />
      <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src="https://images.pexels.com/photos/2528352/pexels-photo-2528352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Image"
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure
                    className="image"
                    style={{ height: "40px", width: "40px" }}
                  >
                    <img
                      src="https://pbs.twimg.com/profile_images/1635769642382766081/x3ROMh2r_400x400.jpg"
                      alt="Image"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">John Smith</p>
                  <p className="subtitle is-6">@johnsmith</p>
                </div>
              </div>
              <div className="content">
                Enjoying my evening at the beach. Look at that amazing view!
                What a beautiful sunset! <a>@markdown.space</a> <a>#beach</a>{" "}
                <a>#sunset</a>
                <br />
                <small>11:09 PM - 10 July 2024</small>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">Component</p>
              <a className="card-header-icon">
                <span className="icon">
                  {" "}
                  <i className="fa fa-angle-down"></i>{" "}
                </span>
              </a>
            </header>
            <div className="card-content">
              <div className="content">
                Enjoying my evening at the beach. Look at that amazing view!
                What a beautiful sunset! <a>@markdown.space</a> <a>#beach</a>{" "}
                <a>#sunset</a>
                <br />
                <small>11:09 PM - 10 July 2024</small>
              </div>
            </div>
            <footer className="card-footer">
              <a className="card-footer-item">Save</a>
              <a className="card-footer-item">Edit</a>
              <a className="card-footer-item">Delete</a>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};
