import { Link } from 'react-router-dom';
import SignUpForm from "../../components/SignUpForm/SignUpForm";


function SignUpPage(props) {
  return (
    <main>
      <h1 className='title'>Sign Up Page</h1>
      <SignUpForm setUser={props.setUser} />
      <Link to="/">Have an account? Log in here.</Link>
    </main>
  );
}
export default SignUpPage;
