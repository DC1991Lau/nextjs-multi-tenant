"use client";

import { FC } from "react";
import { Button } from "./ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { ChevronDown, Loader2, LogOut, Settings } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

interface ProfileDropdownProps {}

const ProfileDropdown: FC<ProfileDropdownProps> = ({}) => {
  const { data } = useSession();

  if (!data) {
    return <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="default" className="gap-3">
          {data?.user.image && (
            <Image
              src={data?.user?.image}
              alt="User Avatar"
              width={28}
              height={28}
              className="object-cover mr-2 rounded-full"
            />
          )}
          {data?.user.name}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href={`/app/settings`}>
          <DropdownMenuItem className="gap-4">
            <Settings />
            <span>Settings</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem className="gap-4" onClick={() => signOut()}>
          <LogOut />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
