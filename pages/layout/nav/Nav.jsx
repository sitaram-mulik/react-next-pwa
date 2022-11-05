import { Popover } from '@headlessui/react';
import { useEffect, useState } from 'react';
import axiosInstance from '../../../utilities/http/axiosInstance';
import DesktopView from './desktop';
import MobileView from './mobile';

const defaultNavState = {
    authLinks: [],
    publicLinks: []
}

export default function Navbar({navProps}) {
    const [navLinks, setNavLiks] = useState(navProps ? navProps : defaultNavState);
    useEffect(() => {
        if(!navProps?.publicLinks) {
            axiosInstance('/nav').then((data) => {
                console.log('data 123 ', data)
                setNavLiks(data);
            }, () => {
                setNavLiks(defaultNavState);
            });
        }
    }, [navProps]);
    return (
        // <Popover className="relative bg-white">
            <DesktopView navLinks={navLinks} />
        //     <MobileView navLinks={navLinks} />
        // </Popover>
    );
};
