import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-tenant Boilerplate | Dashboard",
  description: "Free & open-source multi-tenant app boilerplate",
};

const page = () => {
  return (
    <div className="flex items-center justify-center w-full">
      Dashboard - Escolher o workspace
    </div>
  );
};

export default page;
