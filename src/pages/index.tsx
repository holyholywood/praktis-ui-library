import Badge from "@/components/Badge";
import Heading from "@/components/Common/atoms/Heading";
import Meta from "@/components/Common/molecules/Meta";
import Table from "@/components/Table";

export default function Home() {
  return (
    <>
      <Meta title="Home" />
      <Heading className="text-quaternary">Hi, Welcome to {process.env.NEXT_PUBLIC_APP_NAME}</Heading>
      <div className="my-4 flex gap-4">
        <Badge text="V 0.0.0.1" color="primary" />
        <Badge text="May 2023" color="secondary" />
      </div>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quis unde tempora saepe ea et mollitia ipsum odit aut alias
        voluptatum soluta quibusdam, veritatis, quas consequatur cupiditate eveniet voluptas nulla maiores aliquid architecto! Quos
        obcaecati veritatis mollitia? Asperiores dolorum similique accusantium molestias quod hic recusandae atque minus delectus autem
        impedit, officia illo, earum magni iure! Sed, culpa maxime? Repellat dolorem reiciendis ut libero! Similique harum eos culpa alias
        delectus. Soluta eos delectus corrupti, ab est dolores vero cumque sed aspernatur nihil quam magni accusantium voluptatem maxime
        inventore quae molestiae aliquid cum doloribus ipsam ut nisi placeat voluptatum! Illum sed dignissimos voluptatem magnam quaerat?
        Fugit nam iure beatae cum? Atque ad numquam nisi error incidunt non eveniet necessitatibus pariatur vel porro. Officia laboriosam
        alias necessitatibus facilis illum rerum aperiam accusamus, nobis, enim, beatae sunt dolorem. Accusamus veniam non ab doloremque,
        iusto a aliquid dolorum voluptates amet facere distinctio necessitatibus minus iste consectetur consequatur quasi, asperiores
        inventore fuga assumenda porro vel sint. Explicabo asperiores similique eum odit. Mollitia cumque corrupti magni sint laudantium
        officiis illum quos quod sit cum repellendus ut aperiam dignissimos blanditiis, at eaque ea quas qui eius! Harum, ipsam officia modi
        nam sunt maxime nemo eligendi ut provident corporis facere aperiam, sequi, unde explicabo cumque corrupti. Quaerat sint ipsum ipsam,
        iste corrupti delectus odit vel modi, sunt harum perspiciatis pariatur vero corporis assumenda voluptate! Sapiente iure culpa enim
        nisi ipsa a, non maiores modi labore id facilis? Rem consequuntur, officia eveniet totam blanditiis illo autem recusandae magnam id
        perspiciatis?
      </p>
      <p className="bg-tertiary py-1 px-0.5 rounded my-4 italic">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil molestiae accusantium. Tenetur aspernatur velit magni voluptate
        suscipit reprehenderit accusamus, fugit eaque ipsum vel harum ratione rem a eum ullam temporibus labore nisi ab quasi soluta hic
        architecto saepe at incidunt. Architecto doloremque vitae modi dolorem, alias labore quia veniam.
      </p>
      <div>
        <Table />
      </div>
    </>
  );
}
