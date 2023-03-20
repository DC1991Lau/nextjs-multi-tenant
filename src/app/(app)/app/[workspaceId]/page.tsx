const page = async ({ params }: { params: { workspaceId: string } }) => {
  return <div>Dashboard de {params.workspaceId} </div>;
};

export default page;
