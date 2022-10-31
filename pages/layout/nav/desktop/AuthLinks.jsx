import Link from 'next/link';
import { memo } from 'react';
import { getAuthLinkClasses } from '../utility';

const AuthLinks = memo(({authLinks}) => {
    return (
        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            {authLinks.map((link) => {
                return (
                    <Link
                        key={link?.path}
                        href={link?.path}
                        
                    >
                        <a className={getAuthLinkClasses(link?.path)}>{link?.label}</a>
                    </Link>
                );
            })}{' '}
        </div>
    );
});

export default AuthLinks;
