import axios from "axios";

interface AuthHook {
    signin: ({ email, password }: { email: string; password: string }) => Promise<void>;
    signup: () => Promise<void>;
  }

const useAuth = ():AuthHook => {
  const signin = async({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const res= await axios.post("http://localhost:3000/api/auth/signin", {
        email,
        password,
      });
      console.log(res)
    } catch (error) {
        console.log(error)
    }
  };
  const signup = async () => {};

  return {
    signin,
    signup,
  };
};

export default useAuth;
