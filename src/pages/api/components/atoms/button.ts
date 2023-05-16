// <Badge text="V 0.0.0.1" color="primary" /> \n<Badge text="May 2023" color="secondary" />
// Next.js API route support: https:/\nextjs.org/docs/api-routes/introduction
import { pageContent } from "@/components/Common/templates/PageContentProvider";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<pageContent>) {
  res.status(200).json([
    {
      type: "title",
      content: "Button",
    },
    {
      type: "heading",
      content: "Button",
    },
    {
      type: "quote",
      content: "Button is part of atoms, its have natural tag in HTML",
    },
    {
      type: "paragraph",
      content:
        "The Button component accepts two optional props: color and variant.The color prop allows you to specify the color of the button, and it defaults to 'primary' if not provided. The available colors are determined by an external utility function called colorProvider, which retrieves the appropriate color styles based on the chosen color.\nThe variant prop defines the style variant of the button and can be one of three options: 'default', 'outline', or 'rounded'. If no variant is specified, the button will use the 'default' variant. The shapeProvider utility function is responsible for determining the shape styles based on the chosen variant.\nTo use the Button component, simply import it into your React application and place it in your desired location, providing any desired customization through the color and variant props. Additionally, you can pass any other valid HTML button attributes and event handlers as props to the Button component.\nThe rendered button element inherits all the default attributes and event handlers of an HTML button, while also incorporating the custom styles defined by the colorProvider, shapeProvider, and the additional CSS classes specified in the className attribute of the button element. This allows for easy customization and consistent styling throughout your application.\nBy utilizing this Button component, you can create buttons with different colors, variants, and styles without having to redefine the styles each time. This promotes reusability, maintainability, and consistent design across your application's user interface.'",
    },
    {
      type: "subheading",
      content: "Usage",
    },
    {
      type: "code",
      content: `<Button variant="rounded">Hello World</Button>`,
    },
    {
      type: "subheading",
      content: "Props",
    },
  ]);
}
