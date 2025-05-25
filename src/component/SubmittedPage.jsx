import { useLocation } from "react-router-dom";

const SubmittedPage = () => {
  const { state } = useLocation();

  return (
    <div className="form-container">
      <h2>Submitted Details</h2>
      {state ? (
        <ul>
          <li>First Name: {state.firstName}</li>
          <li>Last Name: {state.lastName}</li>
          <li>Username: {state.username}</li>
          <li>Email: {state.email}</li>
          <li>Phone: {state.phone}</li>
          <li>Country: {state.country}</li>
          <li>City: {state.city}</li>
          <li>PAN: {state.pan}</li>
          <li>Aadhar: {state.aadhar}</li>
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default SubmittedPage;
