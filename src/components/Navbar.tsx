import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown";
import ThemeToggle from "./ThemeToggle";
import { buttonVariants } from "./ui/Button";
import SignInButton from "./ui/SignInButton";
import SignOutButton from "./ui/SignOutButton";
import WorkspaceDropdown from "./WorkspaceDropdown";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="h-16 bg-white w-full flex items-center justify-between border-b px-4 dark:bg-slate-900">
      <div className="flex items-center gap-4">
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          Multi-tenant Boilerplate v1.0
        </Link>
        {session && <WorkspaceDropdown />}
      </div>
      <div className="md:hidden">
        <ThemeToggle />
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        {session ? (
          <div className="flex gap-4">
            <ProfileDropdown />
          </div>
        ) : (
          <SignInButton />
        )}
      </div>
    </div>
  );
};

export default Navbar;
