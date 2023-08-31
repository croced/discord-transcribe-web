"use client";
import { Session } from "@supabase/auth-helpers-nextjs";
import UserMenu from "./components/UserMenu";
import Server from "./components/Server";

interface DashboardProps {
  session: Session;
}

export default function Dashboard({ session }: DashboardProps) {
  if (!session) return <div>Loading...</div>;

  return (
    <div className="w-full md:w-[50rem] lg:w-[64rem] my-4">
      <div className="py-4">
        <UserMenu user={session.user} />
      </div>
      <h1 className="text-xl">My servers</h1>
      <div className="py-4 flex flex-col gap-y-4">
        <Server name="Test Server" active users={25} credits={300} tier="free" />
        <Server name="The Ents Group" active users={168} credits={83} tier="premium" />
        <Server name="Penny Pinchers United" active={false} users={83} credits={0} tier="free" />
      </div>
    </div>
  );
}
