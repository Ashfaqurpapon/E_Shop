import "./ErrorPage.css"; // Import the CSS file

const ErrorPage = () => {
  return (
    <div className="error-page-container">
      <h1 className="error-code">404</h1>
      <h2 className="error-message">Oops! Page Not Found</h2>
      <p className="error-description">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
    </div>
  );
};

export default ErrorPage;
