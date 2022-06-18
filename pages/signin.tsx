import AuthForm from "../components/authForm";

const Signin = () => {
  return <AuthForm mode="signin" text="Sign In" />;
};

Signin.authPage = true;

export default Signin;
