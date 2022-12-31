import "./confirmDelete.css";

export default function confirmDelete({ handleDelete, setToggleDelete }) {
  return (
    <div className="confirm-delete">
      <div className="confirm-wrapper">
        <p>Confirm Delete</p>
        <button className="yes" onClick={handleDelete}>
          Yes
        </button>
        <button className="no" onClick={() => setToggleDelete(false)}>
          No
        </button>
      </div>
    </div>
  );
}
