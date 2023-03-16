import { Button, buttonVariants } from "@/components/ui/Button";
import SignInButton from "@/components/ui/SignInButton";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Multi-tenant Boilerplate",
  description: "Free & open-source multi-tenant app boilerplate",
};

const page = async () => {
  const session = await getServerSession();

  return (
    <div className="flex items-center justify-center w-full">
      {session ? (
        <Link href="/app" className={buttonVariants({ variant: "default" })}>
          Entrar na APP
        </Link>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};

export default page;
