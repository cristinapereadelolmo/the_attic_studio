
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
        id: 6,
        title: "Pages",
        link: "#",
        megaMenu: true,
        hasDropdown: false,
        // pages: true,
        menuItem: true,
        mega_menus: [
            {
                title: "Page Layout 1", link: "#",
                submenus: [
                    { title: "Home Style 01", link: "/" },
                    { title: "Ideas Advice", link: "/ideas-advice" },
                    { title: "Ideas Advice Details", link: "/ideas-advice-details" },
                    { title: "Team", link: "/team" },
                    { title: "Team Details", link: "/team-details" },

                ],
            },
            {
                title: "Page Layout 2", link: "#",
                submenus: [
                    { title: "About", link: "/about" },
                    { title: "Genres", link: "/genres" },
                    { title: "Genres Details", link: "/genres-details" },
                    { title: "Enquiry List", link: "/enquiry-list" },
                    { title: "Faq", link: "/faq" },
                    { title: "Join Us", link: "/join" },
                    { title: "404 Page", link: "/404-page" },
                ],
            },
            {
                title: "Page Layout 3", link: "#",
                submenus: [
                    { title: "Event", link: "/event" },
                    { title: "Event Details", link: "/event-details" },
                    { title: "How It Works", link: "/work-system" },
                    { title: "Terms & Condition", link: "/terms-condition" },
                    { title: "Privacy & Policy", link: "/privacy-policy" },
                    { title: "Product Shipping", link: "/product-shipping" },
                ],
            },
            {
                title: "Page Layout 4", link: "#",
                submenus: [
                    { title: "Shop", link: "/shop" },
                    { title: "Shop Details", link: "/shop-details" },
                    { title: "Cart", link: "/cart" },
                    { title: "Wishlist", link: "/wishlist" },
                    { title: "Login", link: "/login" },
                    { title: "Register", link: "/signup" },
                    { title: "Contact", link: "/contact" },
                ],
            },
        ],
    },
    {
        id: 7,
        hasDropdown: false,
        title: "FAQ",
        link: "/faq",
    },
]

export default menu_data;