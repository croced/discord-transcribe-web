import Button from "@/components/common/ui/Button";
import React from "react";
import Image from "next/image";

export default function LoginButton() {
  return (
    <Button>
      <Image
        src="/assets/icons/documentation.svg"
        alt="Sign in"
        width={20}
        height={20}
        style={{ width: 20, height: 20 }} // necessary to shut nextjs warnings up
        className="mr-2"
      />
      Documentaiton
    </Button>
  );
}
