"use client";

import { FC } from "react";
import { Button } from "./ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { ChevronDown, Plus } from "lucide-react";
import { Tenant } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type TenantWithoutCreatedAt = Omit<Tenant, "createdAt">;
interface WorkspaceDropdownProps {
  tenants?: TenantWithoutCreatedAt[];
}

const WorkspaceDropdown: FC<WorkspaceDropdownProps> = ({ tenants }) => {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className={`${
          pathname === "/" || pathname === "/app/settings" ? "hidden" : ""
        }`}
      >
        <Button variant="outline" size="default" className="gap-3">
          {tenants && tenants?.length > 0 && tenants[0].name}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {tenants?.map((tenant) => (
          <DropdownMenuItem key={tenant.id}>
            <Link href={`/app/${tenant.slug}`}>{tenant.name}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem className="border-t">
          <Link
            href="/app/create/workspace"
            className="flex gap-4 items-center"
          >
            <Plus />
            <span>New Workspace</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WorkspaceDropdown;
