import { memo } from "react";
import { Popover } from '@headlessui/react';
import AuthLinks from './AuthLinks';
import ProductLogo from './ProductLogo';
import PublicLinks from '../PublicLinks';

const DesktopView = memo(({navLinks}) => {
    return <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <ProductLogo />
            {/* <Popover.Group
                as="nav"
                className="hidden space-x-10 md:flex"
            > */}
                <PublicLinks publicLinks={navLinks?.publicLinks || []} />
            {/* </Popover.Group> */}
            <AuthLinks authLinks={navLinks?.authLinks || []} />
        </div>
    </div>
});

export default DesktopView;