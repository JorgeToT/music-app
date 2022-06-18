import AuthForm from "../components/authForm";

const Signup = () => {
  return <AuthForm mode="signup" text="Sign Up" />;
};

Signup.authPage = true;

export default Signup;
