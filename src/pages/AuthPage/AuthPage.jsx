import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

function AuthPage({setUser}) {
  return (
    <main>
      <h1>Log in to Y</h1>
      <LoginForm setUser={setUser} />

      <h3>No account? Sign up below</h3>
      <SignUpForm setUser={setUser} />
    </main>
  );
}
export default AuthPage;
