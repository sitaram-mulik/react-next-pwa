import Link from 'next/link';
import { memo } from 'react';
//import { publicLinks } from './utility';

const PublicLinks = memo(({publicLinks}) => {
    return (
        <>
            {publicLinks?.map((link) => {
                return (
                    <Link
                        key={link?.path}
                        to={link?.path}
                        href={link?.path}
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                        {link?.label}
                    </Link>
                );
            })}
        </>
    );
});

export default PublicLinks;
