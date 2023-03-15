const page = async ({ params }: { params: { userId: string } }) => {
  return <div> {params.userId} </div>;
};

export default page;
