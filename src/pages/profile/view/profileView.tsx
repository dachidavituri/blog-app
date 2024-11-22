// import { loginAtom } from "@/store";
// import { useAtomValue } from "jotai";
import Form from "#/profile/component/form";
// import { loginAtom } from "@/store";
// import { useAtomValue } from "jotai";
// import Info from "#/profile/component/additionalInfo";
// import MainInfo from "#/profile/component/mainInfo";
const ProfileView: React.FC = () => {
  // const user = useAtomValue(loginAtom);
  // console.log(user);
  // conditional rendering info or form if have info or not
  // const { data } = useQuery({
  //   queryKey: ["profile-info", user?.user.id],
  //   queryFn: async () => getProfile(user?.user.id ?? ""),
  //   enabled: !!user?.user.id,
  // });
  return (
    <div>
      <Form />
    </div>
  );
};
export default ProfileView;
