import { signInWithGoogle } from "../libs/firebase/auth";

export const LoginWithGoogle = () => {
    
    return (
        <button className="" onClick={() => signInWithGoogle()}>
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
            <span>Sign in with Google</span>
        </button>
    );
};  