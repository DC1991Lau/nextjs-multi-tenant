import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession();
  return <div> Create new workspace for {session?.user.name} </div>;
};

export default page;
