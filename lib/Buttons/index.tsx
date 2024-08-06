export const Buttons = () => {
  return (
    <section className="section" id="button">
      <div className="columns">
        <div className="column">
          <div className="buttons">
            <a className="button"> Button </a>
            <a className="button is-white"> White </a>
            <a className="button is-light"> Light </a>
            <a className="button is-dark"> Dark </a>
            <a className="button is-black"> Black </a>
            <a className="button is-link"> Link </a>
            <a className="button is-text"> Link </a>
          </div>
          <div className="buttons">
            <a className="button is-primary"> Primary </a>
            <a className="button is-info"> Info </a>
            <a className="button is-success"> Success </a>
            <a className="button is-warning"> Warning </a>
            <a className="button is-danger"> Danger </a>
          </div>
          <div className="buttons">
            <a className="button is-focused"> Focus </a>
            <a className="button is-primary is-focused"> Focus </a>
            <a className="button is-info is-focused"> Focus </a>
            <a className="button is-success is-focused"> Focus </a>
            <a className="button is-warning is-focused"> Focus </a>
            <a className="button is-danger is-focused"> Focus </a>
          </div>
          <div className="buttons">
            <a className="button is-hovered"> Hover </a>
            <a className="button is-primary is-hovered"> Hover </a>
            <a className="button is-info is-hovered"> Hover </a>
            <a className="button is-success is-hovered"> Hover </a>
            <a className="button is-warning is-hovered"> Hover </a>
            <a className="button is-danger is-hovered"> Hover </a>
          </div>
          <div className="buttons">
            <a className="button is-active"> Active </a>
            <a className="button is-primary is-active"> Active </a>
            <a className="button is-info is-active"> Active </a>
            <a className="button is-success is-active"> Active </a>
            <a className="button is-warning is-active"> Active </a>
            <a className="button is-danger is-active"> Active </a>
          </div>
          <div className="buttons">
            <a className="button is-loading"> Loading </a>
            <a className="button is-primary is-loading"> Loading </a>
            <a className="button is-info is-loading"> Loading </a>
            <a className="button is-success is-loading"> Loading </a>
            <a className="button is-warning is-loading"> Loading </a>
            <a className="button is-danger is-loading"> Loading </a>
          </div>
          <div className="buttons">
            <a className="button is-rounded">Rounded</a>
            <a className="button is-primary is-rounded">Rounded</a>
            <a className="button is-link is-rounded">Rounded</a>
            <a className="button is-info is-rounded">Rounded</a>
            <a className="button is-success is-rounded">Rounded</a>
            <a className="button is-danger is-rounded">Rounded</a>
          </div>
        </div>
        <div className="column">
          <div className="buttons">
            <a className="button is-small"> Small </a>
            <a className="button"> Normal </a>
            <a className="button is-medium"> Medium </a>
            <a className="button is-large"> Large </a>
          </div>
          <div className="buttons">
            <a className="button is-link is-outlined"> Outlined </a>
            <a className="button is-primary is-outlined"> Outlined </a>
            <a className="button is-info is-outlined"> Outlined </a>
            <a className="button is-success is-outlined"> Outlined </a>
            <a className="button is-danger is-outlined"> Outlined </a>
          </div>
          <div className="buttons notification is-primary">
            <a className="button is-primary is-inverted is-outlined">
              Invert Outlined
            </a>
            <a className="button is-info is-inverted is-outlined">
              {" "}
              Invert Outlined{" "}
            </a>
            <a className="button is-success is-inverted is-outlined">
              Invert Outlined
            </a>
            <a className="button is-danger is-inverted is-outlined">
              Invert Outlined
            </a>
          </div>
          <div className="buttons notification is-primary">
            <a className="button is-primary is-inverted"> Inverted </a>
            <a className="button is-info is-inverted"> Inverted </a>
            <a className="button is-success is-inverted"> Inverted </a>
            <a className="button is-danger is-inverted"> Inverted </a>
          </div>
        </div>
      </div>
    </section>
  );
};
