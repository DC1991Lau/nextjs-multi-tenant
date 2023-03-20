import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";

const getTenantsByUserId = async () => {
  const session = await getServerSession(authOptions);
  return await db.tenant.findMany({
    where: {
      users: {
        every: {
          userId: session?.user.id,
        },
      },
    },
    select: {
      id: true,
      name: true,
      slug: true,
      plan: true,
      image: true,
    },
  });
};

export { getTenantsByUserId };
