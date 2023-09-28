
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

function AuthPage(props) {
  return (
    <main>
      <h1>Log in to Y</h1>

      <SignUpForm setUser={props.setUser} />

      <LoginForm setUser={props.setUser} />
    </main>
  );
}
export default AuthPage;
