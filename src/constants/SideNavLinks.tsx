import { CommunityIcon, MarketIcon, OverviewIcon, PortfolioIcon, ReportsIcon, SettingsIcon } from "components";

export const SIDENAVLINKS: {
    title: string,
    link: string,
    icon: string
}[] = [
        {
            title: "Overview",
            link: "?",
            icon: OverviewIcon,
        },

        {
            title: "Market",
            link: "/",
            icon: MarketIcon,
        },

        {
            title: "Portfolio",
            link: "$",
            icon: PortfolioIcon,
        },

        {
            title: "Community",
            link: "$",
            icon: CommunityIcon,
        },

        {
            title: "Reports",
            link: "*",
            icon: ReportsIcon,
        },

        {
            title: "Settings",
            link: "*",
            icon: SettingsIcon,
        },
        
    ];
