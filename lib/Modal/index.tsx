import { useState } from "react";

export const Modal = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleModal = () => setIsActive(!isActive);

  return (
    <section className="section" id="modal">
      <a className="button is-primary is-large" onClick={toggleModal}>
        Launch example modal
      </a>
      <div className={`modal ${isActive ? "is-active" : ""}`} id="myModal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button className="delete" onClick={toggleModal}></button>
          </header>
          <section className="modal-card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </section>
          <footer className="modal-card-foot">
            <a className="button is-primary">Save changes</a>
            <a className="button" onClick={toggleModal}>
              Cancel
            </a>
          </footer>
        </div>
      </div>
    </section>
  );
};
