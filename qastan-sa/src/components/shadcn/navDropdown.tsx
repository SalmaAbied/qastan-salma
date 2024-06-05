import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { cn } from "../../utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../shadcn/navMenu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Digitaliseren",
    href: "/Digitaliseren",
    description: "Van kleine tot grote digitaliserings- en scanoplissingen. Op maat of gewoon standaard.",
  },
  {
    title: "Automatiseren en Initaliseren",
    href: "/Automatiseren",
    description: "Centraliseer alle logistieke, administratieve en financiële processen in één enkele applicatie.",
  },
  {
    title: "Plannen",
    href: "/Plannen",
    description: "Intelligente planningsystemen (AI-based) en werkplekplanning die het verschil maken.",
  },
  {
    title: "IT Management, netwerk & infrastructuur",
    href: "/IT",
    description: "Eén aanspreekpunt voor uw volledig IT-gebeuren. Flexibel, snel en transparantie zonder poespas.",
  },
];

const solutionsSubPages = ["/Digitaliseren", "/Automatiseren", "/Plannen", "/IT"];

export function NavigationMenuDemo() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    const path = location.pathname;
    setActivePage(path);
  }, [location]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isSolutionsActive = activePage === "/Oplossingen" || solutionsSubPages.includes(activePage);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <a href="/Oplossingen" className={`lg:ml-6 font-medium text-lg ${isSolutionsActive ? "text-darkorange" : "text-white"} hover:text-darkorange transition duration-300`} onClick={handleMenuToggle}>
              Oplossingen
            </a>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="bg-white rounded-xl grid w-[300px] gap-3 p-4 sm:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="text-darkblue hover:bg-gray-200 rounded-xl transition duration-300">
      <NavigationMenuLink asChild>
        <a ref={ref} className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors", className)} {...props}>
          <div className="text-sm font-black leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
