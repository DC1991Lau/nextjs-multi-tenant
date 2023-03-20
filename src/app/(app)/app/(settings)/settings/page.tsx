import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession();
  return <div> Settings de {session?.user.name} </div>;
};

export default page;
