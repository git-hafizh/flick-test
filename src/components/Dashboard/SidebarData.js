import { Home, Product, Report, Settings } from "../assetsImg";

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <img style={{width: "28px"}} src={Home} alt="home" />,
        cName: 'nav-text'
    },
    {
        title: 'Produk',
        path: '/product',
        icon: <img style={{width: "28px"}} src={Product} alt="product" />,
        cName: 'nav-text'
    },
    {
        title: 'Laporan',
        path: '/report',
        icon: <img style={{width: "28px"}} src={Report} alt="report" />,
        cName: 'nav-text'
    },
    {
        title: 'Pengaturan',
        path: '/settings',
        icon: <img style={{width: "28px"}} src={Settings} alt="settings" />,
        cName: 'nav-text'
    },
];