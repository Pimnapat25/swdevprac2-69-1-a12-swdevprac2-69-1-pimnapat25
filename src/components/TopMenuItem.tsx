import Link from "next/link";

type TopMenuItemProps = {
  title: string;
  pageRef: string;
};

export default function TopMenuItem({ title, pageRef }: TopMenuItemProps) {
  return (
    <Link
      href={pageRef}
      className="flex h-full w-28 flex-col items-center justify-center border-l border-gray-200 bg-gray-100 transition-colors hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-amber-500"
    >
      <span className="text-[11px] font-medium text-gray-500">Menu Item</span>
      <span className="text-sm font-bold text-gray-800">{title}</span>
    </Link>
  );
}
