import { Button } from "@/components/ui/Button";
import LargeHeading from "@/components/ui/LargeHeading";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Multi-tenant Boilerplate | App",
  description: "Free & open-source multi-tenant app boilerplate",
};

const page = async () => {
  const session = await getServerSession(authOptions);
  const tenants = await db.tenant.findMany({
    where: {
      users: {
        every: {
          userId: session?.user.id,
        },
      },
    },
  });

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      <LargeHeading size="sm">Escolha o seu Workspace </LargeHeading>
      {tenants.map((tenant) => (
        <Link href={`/app/${tenant.slug}`} key={tenant.id}>
          <Button size="lg" variant="outline">
            {tenant.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default page;
