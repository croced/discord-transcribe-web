import React from "react";
import SignOut from "./SignOut";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Database } from "@/lib/database.types";

const Dashboard: React.FC = async () => {
  
    const supabase = createServerComponentClient<Database>({ cookies });

	const {
		data: { session }
	} = await supabase.auth.getSession();

	if (!session) {
		redirect('/');
	}

  return (
    <div>
      <h1>Dashboard</h1>
      <SignOut />
    </div>
  );
};

export default Dashboard;
