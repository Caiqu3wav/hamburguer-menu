interface MenuItem {
    title: string;
    path: string;
}
interface Props {
    menuItems: MenuItem[];
    buttonColor?: string;
    colorFrom?: string;
    colorTo?: string;
}
export default function HamburgerMenu({ menuItems, buttonColor, colorFrom, colorTo, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
