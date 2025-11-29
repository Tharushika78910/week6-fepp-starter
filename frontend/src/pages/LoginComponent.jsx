import useLogin from "../hooks/useLogin";
import useField from "../hooks/useField";

const LoginComponent = ({ setIsAuthenticated }) => {
  const email = useField("text");
  const password = useField("password");

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
