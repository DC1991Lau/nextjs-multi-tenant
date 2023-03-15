import Link from "next/link";
import { Button } from "./ui/Button";

const Navbar = async () => {
  return (
    <div className="h-16 bg-white w-full flex items-center justify-between border-b px-4 dark:bg-slate-900">
      <Link href="/">Multi-tenant Boilerplate v1.0</Link>
      <Button variant="default" size="default">
        Sign In
      </Button>
    </div>
  );
};

export default Navbar;
