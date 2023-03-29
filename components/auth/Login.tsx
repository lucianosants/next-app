'use client';

import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { BsPersonPlus } from 'react-icons/bs';

export default function Login({ session }: any) {
    return (
        <div className="text-neutral-variant-50">
            {!session ? (
                <button onClick={() => signIn()}>
                    {' '}
                    <BsPersonPlus size={28} />{' '}
                </button>
            ) : (
                <button onClick={() => signOut()}>
                    <Image
                        src={session?.user?.image}
                        alt=""
                        height={80}
                        width={80}
                        className="object-fill w-10 h-10 border rounded-full border-warning-400"
                    />
                </button>
            )}
        </div>
    );
}
