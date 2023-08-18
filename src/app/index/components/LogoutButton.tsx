import Button from "@/components/common/ui/Button";
import React from "react";
import Image from "next/image";

export default function LogoutButton() {
  return (
    <Button>
      <Image
        src="/assets/icons/sign-out.svg"
        alt="Sign in"
        width={20}
        height={20}
        style={{ width: 20, height: 20 }} // necessary to shut nextjs warnings up
        className="mr-2"
      />
      Sign out
    </Button>
  );
}
