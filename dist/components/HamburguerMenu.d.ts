interface MenuItem {
    title: string;
    path: string;
}
interface NavProps {
    MenuItems: MenuItem[];
    asideBgColor?: string;
    asideTextColor?: string;
    asideTextBgColor?: string;
    asideTextHoverColor?: string;
    asideBorderTextColor?: string;
}
export default function HamburguerMenu({ MenuItems, asideBgColor, asideTextColor, asideBorderTextColor, asideTextHoverColor, }: NavProps): import("react/jsx-runtime").JSX.Element;
export {};
