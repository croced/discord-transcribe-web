import { Database } from '@/lib/database.types';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
	const supabase = createServerComponentClient<Database>({ cookies });

	const {
		data: { session }
	} = await supabase.auth.getSession();

	if (!session) {
		redirect('/');
	}

	const { data } = await supabase.from('posts').select('*');

	return <pre>{JSON.stringify({ data }, null, 2)}</pre>;
}