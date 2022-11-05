import Link from 'next/link';
import { memo } from 'react';

const NavItem = memo(() => {
    return (
        <div className="flex justify-start">
            <Link href="">
                <span className="sr-only">Your Company</span>
                <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                />
            </Link>
        </div>
    );
});

export default NavItem;