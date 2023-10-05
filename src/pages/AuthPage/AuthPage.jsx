import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

function AuthPage(props) {
  return (
    <main>
      <h1>Log in to Y</h1>
      <LoginForm setUser={props.setUser} />

      <h3>No account? Sign up below</h3>
      <SignUpForm setUser={props.setUser} />
    </main>
  );
}
export default AuthPage;
