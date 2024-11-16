import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const RegistrationForm: React.FC = () => {
  return (
    <form className="flex flex-col gap-3 bg-slate-400 p-5 rounded-2xl">
      <h1 className="text-3xl">Sign up for Blog Platform</h1>
      <p>Create your account to start blogging</p>
      <div>
        <label>Name</label>
        <Input placeholder="John doe" />
      </div>
      <div>
        <label>Email</label>
        <Input placeholder="john@example.com" />
      </div>
      <div>
        <label>Password</label>
        <Input placeholder="Enter password" />
      </div>
      <div>
        <label>Confirm password</label>
        <Input placeholder="repeat password" />
      </div>
      <Button className="bg-blue-600 font-bold text-white">Sign up</Button>
      <p>Already have an acccount? </p>
      <Link
        to={"/ka/login"}
        className="text-blue-600 font-bold hover:underline"
      >
        Log in
      </Link>
    </form>
  );
};
export default RegistrationForm;
