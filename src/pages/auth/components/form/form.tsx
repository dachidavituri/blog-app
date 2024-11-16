import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const AuthForm: React.FC = () => {
  return (
    <form className="flex flex-col gap-3 bg-slate-400 p-5 rounded-2xl">
      <h1 className="text-3xl">Log in to Blog Platform</h1>
      <p>Enter your creditials to access your account</p>
      <div>
        <label>Email</label>
        <Input placeholder="john@example.com" />
      </div>
      <div>
        <label>Password</label>
        <Input placeholder="Enter password" />
      </div>
      <Button className="bg-blue-600 font-bold text-white">Log In</Button>
      <p>Don't have an acccount? </p>
      <Link
        to={"/ka/register"}
        className="text-blue-600 font-bold hover:underline"
      >
        Sign Up
      </Link>
    </form>
  );
};
export default AuthForm;
