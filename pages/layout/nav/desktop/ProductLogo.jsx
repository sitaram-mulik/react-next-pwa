import { Popover } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { memo } from 'react';

const ProductLogo = memo(() => {
    return (
        <>
            <div className="flex justify-start">
                <Link href="/">
                    <a><span className="sr-only">Your Company</span>
                    <img
                        className="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                    /></a>
                </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
            </div>
        </>
    );
});

export default ProductLogo;