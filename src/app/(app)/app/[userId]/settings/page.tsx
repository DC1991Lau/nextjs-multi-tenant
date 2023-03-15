const page = async ({ params }: { params: { userId: string } }) => {
  return <div> Settings de {params.userId} </div>;
};

export default page;
