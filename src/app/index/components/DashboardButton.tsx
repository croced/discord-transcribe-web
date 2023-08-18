'use client';

import Button from "@/components/common/ui/Button";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DashboardButton() {

  const router = useRouter();

  return (
    <Button onClick={() => router.push("/dashboard")}>
      <Image
        src="/assets/icons/dashboard.svg"
        alt="Sign in"
        width={20}
        height={20}
        style={{ width: 20, height: 20 }} // necessary to shut nextjs warnings up
        className="mr-2"
      />
      Dashboard
    </Button>
  );
}
