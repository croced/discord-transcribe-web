"use client";
import { Session } from "@supabase/auth-helpers-nextjs";
import UserMenu from "./components/UserMenu";

interface DashboardProps {
  session: Session;
}


export default function Dashboard({ session }: DashboardProps) {
  if (!session) return <div>Loading...</div>;

  return (
    <div className="w-full mt-4">
      <div className="mt-4">
        <UserMenu user={session.user} />
      </div>
    </div>
  );
}
