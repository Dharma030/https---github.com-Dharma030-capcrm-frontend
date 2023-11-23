import { Modal, Button } from "react-bootstrap";
import { createNewTicket } from "../api/ticket";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function TicketCreationModal(props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createTicket = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;
    const priority = parseInt(e.target.priority.value);

    const ticket = { title, description, priority };

    setLoading(true);

    try {
      await createNewTicket(ticket);
      props.onClose();
      props.fetchTickets();
      navigate("/customer", { replace: true });
    } catch (err) {
      console.error(err);
      setError("Failed to create the ticket. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Ticket</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={createTicket} disabled={loading}>
          <div className="input-group mb-3">
            <span className="input-group-text">Title </span>
            <input type="text" name="title" required />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Description </span>
            <textarea
              name="description"
              type="text"
              className="md-texarea"
              required
              rows={5}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Priority </span>
            <select name="priority" className="form-select">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
            </select>
          </div>

          <Button variant="secondary" onClick={props.onClose} disabled={loading}>
            Cancel
          </Button>

          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? "Creating..." : "Create"}
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default TicketCreationModal;
