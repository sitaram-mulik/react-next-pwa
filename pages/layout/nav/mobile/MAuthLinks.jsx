import Link from 'next/link';
import { memo } from 'react';

const MAuthLinks = memo(({authLinks}) => {
    return (
        <div>
            {authLinks?.map((link) => {
                if (link?.path === '/signup') {
                    return (
                        <p className="mb-6 text-center text-base font-medium text-gray-500" key={link?.path}>
                            Not an existing user?{' '}
                            <Link
                                href={link?.path}
                                legacyBehavior
                            >
                                <a className="text-indigo-600 hover:text-indigo-500">{link?.label}</a>
                            </Link>
                        </p>
                    );
                }
                return (
                    <Link
                        href={link?.path}
                        legacyBehavior
                    >
                        <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">{link?.label}</a>
                    </Link>
                );
            })}
        </div>
    );
});

export default MAuthLinks;