export const publicLinks = [
    {
        path: '/about',
        label: 'About'
    },
    {
        path: '/home',
        label: 'Home'
    },
]

export const authLinks = [
    {
        path: '/signup',
        label: 'Sign up'
    },
    {
        path: '/login',
        label: 'Log in'
    },

];

export default function Categories(req, res) {
    res.status(200).send({
        authLinks,
        publicLinks
    });
}