import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SiteContext = createContext();

function SiteContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [themeName, setThemeName] = useState("light");
    const navigate = useNavigate();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user") ?? null));
        const preferredTheme = getPreferredTheme();
        changeTheme(preferredTheme);
        setThemeName(preferredTheme);
    }, []);

    const handleLogin = () => {
        const user = { id: 1, name: "onursir" };
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    function getPreferredTheme() { // tarayacının varsayılan temasını öğrenmek için yapılır
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function changeTheme(themeName) {
        document.documentElement.setAttribute("data-bs-theme", themeName);
    }

    function handleTheme() {
        setThemeName(prev => {
            const themeInfo = prev === "light" ? "dark" : "light";
            changeTheme(themeInfo);
            localStorage.setItem("theme", themeInfo);
            return themeInfo;
        });
    }

    return (
        <SiteContext.Provider value={{ user, handleLogin, handleLogout, themeName, handleTheme }}>
            {children}
        </SiteContext.Provider>
    );
}

export { SiteContextProvider, SiteContext };
