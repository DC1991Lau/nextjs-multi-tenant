const page = async ({ params }: { params: { workspaceId: string } }) => {
  return <div> Settings de {params.workspaceId} </div>;
};

export default page;
