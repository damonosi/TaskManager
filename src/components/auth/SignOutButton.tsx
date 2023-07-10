import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        signOut({
          callbackUrl: "/",
        });
      }}
      className="text-red-600"
    >
      Sign out
    </button>
  );
};

export default SignOutButton;
