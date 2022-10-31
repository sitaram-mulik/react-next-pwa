export const getAuthLinkClasses = (path) => {
    return `whitespace-nowrap text-base font-medium ${path === '/login' ? 'ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-700' : 'text-gray-500 hover:text-gray-900'}`;
};

export const getAuthLinkClassesForMobile = (path) => {
    return `text-base font-medium ${path === '/login' ? 'flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-700' : 'mt-6 text-center'}`;
};


