import { signInWithGoolePopup } from "../utils/firebase.utils";
import SignInForm from "../SignInwithEmailPass/SignInwithEmailPass";
import NewUser from "../NewUser/NewUser";
const Sing = () => {
  const logGoogleuser = async () => {
    const response = await signInWithGoolePopup();
    console.log(response);
  };

  return (
    <div>
      <button onClick={logGoogleuser}> Sign in with Google Popup</button>
      <SignInForm />
      <NewUser />
    </div>
  );
};

export default Sing;
