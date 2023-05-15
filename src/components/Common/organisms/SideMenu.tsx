import Link from "next/link";
import React from "react";
interface SideMenuItemProps {
  name: string;
  child: SideMenuChildItemProps[];
  url: string;
}
interface SideMenuChildItemProps {
  componentName: string;
  url: string;
}
const SideMenuItem = ({ child, name, url }: SideMenuItemProps) => {
  return (
    <li>
      <Link href={url} className="hover:text-secondary hover:underline">
        {name}
      </Link>
      <ul className="text-sm text-maindark/80 pl-2 space-y-2 py-2">
        {child.map((child, index) => {
          return <SideMenuChildItem key={index} componentName={child.componentName} url={child.url} />;
        })}
      </ul>
    </li>
  );
};

const SideMenuChildItem = ({ componentName, url }: SideMenuChildItemProps) => {
  return (
    <li className="w-fit">
      <Link className="hover:underline hover:text-secondary h-full" href={url}>
        {componentName}
      </Link>
    </li>
  );
};

const SideMenu = () => {
  return (
    <aside className="w-64 sticky h-full border-r border-secondary/50 top-0 left-0">
      <h3 className="text-secondary text-lg font-semibold">Components</h3>
      <ul className="text pt-4 space-y-4">
        {sideMenuItem.map((el, i) => {
          return <SideMenuItem {...el} key={i} />;
        })}
      </ul>
    </aside>
  );
};

export default SideMenu;

const AtomsChild = [
  {
    componentName: "Button",
    url: "/components/atoms/button",
  },
  {
    componentName: "Heading",
    url: "/components/atoms/heading",
  },
  {
    componentName: "Tooltip",
    url: "/components/atoms/tooltip",
  },
  {
    componentName: "Input Text",
    url: "/components/atoms/input-text",
  },
  {
    componentName: "Badge",
    url: "/components/atoms/badge",
  },
  {
    componentName: "Pills",
    url: "/components/atoms/pills",
  },
];
const MoleculesChild = [
  {
    componentName: "Input Group",
    url: "/components/molecules/input-group",
  },
  {
    componentName: "Card",
    url: "/components/molecules/card",
  },
];
const OrganismsChild = [
  {
    componentName: "Modal",
    url: "/components/organisms/modal",
  },
  {
    componentName: "Gallery",
    url: "/components/organisms/gallery",
  },
  {
    componentName: "Table",
    url: "/components/organisms/table",
  },
];

const sideMenuItem = [
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
];
