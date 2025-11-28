import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { useField } from "../hooks/useField";

const SignupComponent = ({ setIsAuthenticated }) => {
  const { setEmail, setPassword, handleSignup } = useSignup(setIsAuthenticated);

  // useField for all three inputs
  const emailField = useField("email");
  const passwordField = useField("password");
  const password2Field = useField("password");

  const [passwordError, setPasswordError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend check: passwords must match
    if (passwordField.value !== password2Field.value) {
      setPasswordError("Passwords do not match");
      return;
    }

    setPasswordError(null);

    // keep useSignup responsible for the actual request
    // but sync its internal state from the useField values
    setEmail(emailField.value);
    setPassword(passwordField.value);

    await handleSignup();

    // clear the form fields using useField.reset
    emailField.reset();
    passwordField.reset();
    password2Field.reset();
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type={emailField.type}
            value={emailField.value}
            onChange={(e) => {
              emailField.onChange(e);
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type={passwordField.type}
            value={passwordField.value}
            onChange={(e) => {
              passwordField.onChange(e);
              setPassword(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="password2">Confirm Password:</label>
          <input
            id="password2"
            type={password2Field.type}
            value={password2Field.value}
            onChange={(e) => {
              password2Field.onChange(e);
            }}
          />
        </div>

        {passwordError && (
          <div style={{ color: "red" }}>{passwordError}</div>
        )}

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignupComponent;
