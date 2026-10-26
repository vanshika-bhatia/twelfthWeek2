
import { useState } from "react";

export default function Collaborate() {
  const [email, setEmail] = useState("");
  const [invitedUsers, setInvitedUsers] = useState([]);
  const [message, setMessage] = useState(null);

  function handleInvite(event) {
    event.preventDefault();
    setMessage(null);

    const normalizedEmail = email.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    if (invitedUsers.includes(normalizedEmail)) {
      setMessage({
        type: "error",
        text: "This user has already been invited.",
      });
      return;
    }

    setInvitedUsers((previous) => [
      ...previous,
      normalizedEmail,
    ]);

    setEmail("");
    setMessage({
      type: "success",
      text: `Invitation created for ${normalizedEmail}.`,
    });
  }

  return (
    <section>
      <h2>Collaborate on Notes</h2>
      <p>Invite someone to collaborate on your notes.</p>

      <form onSubmit={handleInvite}>
        <label htmlFor="collaborator-email">
          Collaborator email
        </label>

        <input
          id="collaborator-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="name@example.com"
          required
        />

        <button type="submit">Invite collaborator</button>
      </form>

      {message && (
        <p role="status" aria-live="polite">
          {message.text}
        </p>
      )}

      <h3>Invited collaborators</h3>

      {invitedUsers.length === 0 ? (
        <p>No collaborators invited yet.</p>
      ) : (
        <ul>
          {invitedUsers.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
