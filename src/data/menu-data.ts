
type TSubmenu = {
    title: string;
    link: string
}

type TMegaManu = {
    title: string;
    link: string
    submenus: TSubmenu[]
}

interface TMenuItem {
    menuItem?: any;
    active?: string;
    id: number;
    hasDropdown?: boolean;
    title: string;
    link: string;
    submenus?: any[];
    pages?: boolean;
    megaMenu?: boolean;
    mega_menus?: TMegaManu[];
}
const menu_data: TMenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
        hasDropdown: false,
    },
    {
        id: 2,
        title: "About us",
        link: "#",
        hasDropdown: true,
        submenus: [
            { title: "About the Studio", link: "/about" },
            { title: "About the Team", link: "/team-details" },
        ],
    },
    {
        id: 3,
        title: "Services, Equipments & Rates",
        link: "#",
        hasDropdown: true,
        submenus: [
            { title: "Services", link: "/services" },
            { title: "Studio Equipment", link: "/equipment" },
            { title: "Rates", link: "/rates" },
        ],
    },
    // {
    //     id: 3,
    //     hasDropdown: false,
    //     title: "Studio Equipment",
    //     link: "/shop",
    // },
    // {
    //     id: 4,
    //     hasDropdown: false,
    //     title: "Services",
    //     link: "/enquiry-list",
    // },
    //     {
    //     id: 5,
    //     hasDropdown: false,
    //     title: "Rates",
    //     link: "/enquiry-list",
    // },
    {
        id: 4,
        title: "Sounds from The Attic",
        link: "#",
        hasDropdown: true,
        submenus: [
            { title: "Sounds from The Attic", link: "#" },
            { title: "Testimonials", link: "#" },
        ],
    },
    {
        id: 5,
        hasDropdown: false,
        title: "Gallery",
        link: "/gallery",
    },
    {
        id: 7,
        hasDropdown: false,
        title: "FAQ",
        link: "/faq",
    },
]

export default menu_data;