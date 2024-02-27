import { useRouteError, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const just = useNavigate()

  return (
    <div id="error-page">
      <h1>Nothing Here!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {""}
      <button className="errorbutton" onClick={() => just("./")} > Go back to the Main Menu</button>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}