import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/lib/db";

function getGoogleCredentials() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!clientId || clientId.length === 0) {
    throw new Error("No clientID for google provider set");
  }
  if (!clientSecret || clientSecret.length === 0) {
    throw new Error("No clientSecret for google provider set");
  }

  return { clientId, clientSecret };
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: getGoogleCredentials().clientId,
      clientSecret: getGoogleCredentials().clientSecret,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.image = token.picture;
      }

      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      });

      const tenants = await db.tenant.findMany({
        where: {
          users: {
            every: {
              userId: user?.id,
            },
          },
        },
      });
      if (user && tenants.length === 0) {
        // TO-DO:
        // Create new default tenant

        await db.$transaction(async () => {
          const tenant = await db.tenant.create({
            data: {
              name: user.name + " Workspace",
              plan: "free",
              slug:
                //@ts-ignore
                user?.name?.toLocaleLowerCase().replace(/ /g, "-") +
                Math.floor(Math.random() * 101),
            },
          });

          await db.usersOnTenants.create({
            data: {
              userId: user?.id,
              tenantId: tenant?.id,
            },
          });
        });
      }
      if (!dbUser) {
        token.id = user!.id;
        return token;
      }
      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
    redirect() {
      return "/app";
    },
  },
};
