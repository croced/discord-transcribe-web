import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Dashboard from "./Dashboard";

export default async function WebApp() {
  const cookieStore = cookies();

  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });

  const { data } = await supabase.auth.getSession();

  if (!data?.session) {
    redirect("/");
  }

  return <Dashboard session={data.session} />;
}
