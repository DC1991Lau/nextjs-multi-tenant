const page = async ({ params }: { params: { userId: string } }) => {
  return <div>Dashboard de {params.userId} </div>;
};

export default page;
