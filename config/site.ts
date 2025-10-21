export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Stock Portfolio Tracker",
  description: "Track and manage your stock portfolio with ease.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Explore",
      href: "/explore",
    },

    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/Mercuryy200/StockPortfolioTracker",
  },
};
