export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "NIKASS",
    description: "Портативные энергетические системы нового поколения",
    navItems: [
        {
            label: "Каталог",
            href: "/products",
        },
        {
            label: "О нас",
            href: "/about",
        },
        {
            label: "Контакты",
            href: "/contact",
        },
    ],
    navMenuItems: [
        {
            label: "Каталог",
            href: "/products",
        },
        {
            label: "О нас",
            href: "/about",
        },
        {
            label: "Контакты",
            href: "/contact",
        },
    ],
    links: {
        github: "https://github.com/n1k0lay",
    },
};
