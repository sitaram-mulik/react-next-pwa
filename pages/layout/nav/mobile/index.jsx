import { memo } from "react";
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import MAuthLinks from './MAuthLinks';
import MProductLogo from './MProductLogo';
import PublicLinks from '../PublicLinks';

const MobileView = memo(({navLinks}) => {
    return <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
    >
        <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <MProductLogo />
                <div className="space-y-6 py-6 px-5">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8 ">
                        <PublicLinks publicLinks={navLinks?.publicLinks || []} />
                    </div>
                    <MAuthLinks authLinks={navLinks?.authLinks || []} />
                </div>
            </div>
        </Popover.Panel>
    </Transition>
});

export default MobileView;