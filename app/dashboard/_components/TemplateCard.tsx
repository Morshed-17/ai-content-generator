import Image from "next/image";
import { TEMPLATE } from "./TemplateListSection";
import Link from "next/link";

const TemplateCard = ({ icon, category, desc, name, slug }: TEMPLATE) => {
  return (
    <Link
      href={`/dashboard/content/${slug}`}
      className="p-5 shadow-md rounded-md border bg-white flex-col flex gap-3 cursor-pointer hover:scale-105 transition-all"
    >
      <Image src={icon} width={50} height={50} alt="icon" />
      <h2 className="font-medium text-lg">{name}</h2>
      <p className="text-gray-500 line-clamp-3">{desc}</p>
    </Link>
  );
};

export default TemplateCard;
