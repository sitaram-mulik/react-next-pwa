import { createContext, useEffect, useState } from "react";

export const navContext = createContext();

function NavProvider({children, navProps}) {
    const [navLinks, setNavLinks] = useState(navProps);
    useEffect(() => {
        console.log('navPropsnavPropsnavProps ', navLinks)
    }, [navLinks]);
    return <navContext.Provider store={{navLinks, setNavLinks}}>{children}</navContext.Provider>;
};



export default NavProvider;