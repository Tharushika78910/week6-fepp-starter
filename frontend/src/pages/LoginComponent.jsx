import useLogin from "../hooks/useLogin";
import useField from "../hooks/useField";

const LoginComponent = ({ setIsAuthenticated }) => {
  // useField handles the form fields
  const email = useField("text");
  const password = useField("password");

  // useLogin handles the login request
  const { handleLogin } = useLogin(setIsAuthenticated);

  const onSubmit = () => {
    handleLogin(email.value, password.value);
  };

  return (
    <div>
      <h2>Login</h2>

      <label>
        Email:
        <input {...email} />
      </label>
      <br />

      <label>
        Password:
        <input {...password} />
      </label>
      <br />

      <button onClick={onSubmit}>Log In</button>
    </div>
  );
};

export default LoginComponent;
