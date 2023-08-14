import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
interface SideMenuItemProps {
  name: string;
  child?: SideMenuChildItemProps[];
  url: string;
}
interface SideMenuChildItemProps {
  componentName: string;
  url: string;
}
const SideMenuItem = ({ child, name, url }: SideMenuItemProps) => {
  const router = useRouter();
  return (
    <li>
      <Link href={url} className={`hover:text-primary/80 ${router.pathname === url && "text-primary font-semibold"}`}>
        {name}
      </Link>
      {child && (
        <ul className="text-sm text-maindark/80 pl-2 space-y-2 py-2">
          {child.map((child, index) => {
            return <SideMenuChildItem key={index} componentName={child.componentName} url={url + child.url} />;
          })}
        </ul>
      )}
    </li>
  );
};

const SideMenuChildItem = ({ componentName, url }: SideMenuChildItemProps) => {
  const router = useRouter();
  return (
    <li className="w-fit">
      <Link className={` hover:text-primary/80 h-full ${router.pathname === url && "underline text-primary"}`} href={url}>
        {componentName}
      </Link>
    </li>
  );
};

const SideMenu = () => {
  return (
    <aside className="w-64 sticky  h-[calc(100vh-200px)] top-0 left-0 overflow-y-scroll bg-red-500">
      <h3 className="text-secondary text-lg font-semibold">Components</h3>
      <ul className="text pt-4 space-y-4 ">
        {sideMenuItem.map((el, i) => {
          return <SideMenuItem {...el} key={i} />;
        })}
      </ul>
    </aside>
  );
};

export default SideMenu;

const AtomsChild: sideMenuChildType = [
  {
    componentName: "Button",
    url: "/button",
  },
  {
    componentName: "Badge",
    url: "/badge",
  },
  {
    componentName: "Heading",
    url: "/heading",
  },
  {
    componentName: "Tooltip",
    url: "/tooltip",
  },
  {
    componentName: "Input Text",
    url: "/input-text",
  },
  {
    componentName: "Select",
    url: "/select",
  },
  {
    componentName: "Switch",
    url: "/switch",
  },
  {
    componentName: "Pills",
    url: "/pills",
  },
];
const MoleculesChild: sideMenuChildType = [
  {
    componentName: "Input Group",
    url: "/input-group",
  },
  {
    componentName: "Card",
    url: "/card",
  },
  {
    componentName: "Notification",
    url: "/notifications",
  },
  {
    componentName: "Section Card",
    url: "/section-card",
  },
];
const OrganismsChild: sideMenuChildType = [
  {
    componentName: "Modal",
    url: "/modal",
  },
  {
    componentName: "Gallery",
    url: "/gallery",
  },
  {
    componentName: "Table",
    url: "/table",
  },
  {
    componentName: "Upload Image",
    url: "/upload-image",
  },
];
const SpecialsChild: sideMenuChildType = [
  {
    componentName: "Category Selector",
    url: "/category-selector",
  },
  {
    componentName: "Category Selector 2",
    url: "/item-category-select",
  },
];

const HelpersChild: sideMenuChildType = [
  {
    componentName: "Cookie",
    url: "/cookie",
  },
  {
    componentName: "Jwt Parser",
    url: "/jwt-parser",
  },
];
type sideMenuChildType = {
  componentName: string;
  url: string;
}[];

type sideMenuItemType = {
  name: string;
  url: string;
  child?: sideMenuChildType;
}[];

const sideMenuItem: sideMenuItemType = [
  {
    name: "Philosophy",
    url: "/philosophy",
  },
  {
    name: "Atomic Design",
    url: "/atomic-design",
  },
  {
    name: "Atoms",
    child: AtomsChild,
    url: "/components/atoms",
  },
  {
    name: "Molecules",
    child: MoleculesChild,
    url: "/components/molecules",
  },
  {
    name: "Organisms",
    child: OrganismsChild,
    url: "/components/organisms",
  },
  {
    name: "Specials",
    url: "/components/specials",
    child: SpecialsChild,
  },
  {
    name: "Helpers",
    url: "/helpers",
    child: HelpersChild,
  },
  {
    name: "Installation",
    url: "/installation",
  },
];
