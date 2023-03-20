"use client";

import { FC } from "react";
import { Button } from "./ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { ChevronDown } from "lucide-react";
import { Tenant, User } from "@prisma/client";
import Link from "next/link";

export type TenantWithoutCreatedAt = Omit<Tenant, "createdAt">;
interface WorkspaceDropdownProps {
  tenants?: TenantWithoutCreatedAt[];
}

const WorkspaceDropdown: FC<WorkspaceDropdownProps> = ({ tenants }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="default" className="gap-3">
          {tenants?.length > 0 && tenants[0].name}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {tenants?.map((tenant) => (
          <DropdownMenuItem key={tenant.id}>
            <Link href={`/app/${tenant.slug}`}>{tenant.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WorkspaceDropdown;
