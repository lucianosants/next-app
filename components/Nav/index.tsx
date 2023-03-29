import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { HiHome } from 'react-icons/hi';

import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Login from '../auth/Login';

export default async function Nav() {
    const session = await getServerSession(authOptions);

    return (
        <nav className="flex items-center justify-between p-3 rounded-md bg-primary-600">
            <Link
                href={'/'}
                className="flex items-center gap-3 font-bold text-neutral-variant-50">
                {<HiHome size={28} />} Home
            </Link>
            <Login session={session} />
        </nav>
    );
}
