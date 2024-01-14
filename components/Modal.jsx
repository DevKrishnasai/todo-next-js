const Modal = ({ modalOpen, setModalOpen, children }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box relative">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={(e) => setModalOpen(false)}
          >
            ✕
          </button>
        </form>
        {children}
      </div>
    </div>
  );
};

export default Modal;
