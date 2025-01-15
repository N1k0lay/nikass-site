export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "NIKASS",
  description: "Портативные энергетические системы нового поколения",
  navItems: [
    {
      label: "Каталог",
      href: "products",
    },
    {
      label: "Портативки",
      href: "portable-energy-storage-system",
    },
  ],
  navMenuItems: [
    {
      label: "Каталог",
      href: "/products",
    },
    {
      label: "Портативки",
      href: "/portable-energy-storage-system",
    },
  ],
  links: {
    github: "https://github.com/n1k0lay",
  },
};
