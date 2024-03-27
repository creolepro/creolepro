import Link from "next/link";

export function NavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick?: (e: any) => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  );
}
