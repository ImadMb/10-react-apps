import TreeList from "./TreeList.jsx"

function Tree() {

    const data = [
        {
            label: "Home",
            to: "/",
        },
        {
            label: "Profile",
            to: "/profile",
            children: [
                {
                    label: "Details",
                    to: "details",
                    children: [
                        {
                            label: "Location",
                            to: "location",
                        },
                    ],
                },
            ],
        },
        {
            label: "Settings",
            to: "/settings",
            children: [
                {
                    label: "Account",
                    to: "account",
                },
                {
                    label: "Security",
                    to: "security",
                    children: [
                        {
                            label: "Login",
                            to: "login",
                        },
                        {
                            label: "Register",
                            to: "register",
                        },
                    ],
                },
            ],
        },
    ];

    

    


    return (
        <TreeList data={data} />
    )
}

export default Tree