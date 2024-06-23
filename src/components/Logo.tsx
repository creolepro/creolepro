import Image from "next/image";
import Link from "next/link";

import CreoleProLogo from "@/images/logos/creole-pro-logo.png";

export function Logo(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <Link href="/">
      <Image
        src={CreoleProLogo}
        width={160}
        height={28}
        alt="Picture of the author"
      />
    </Link>
  );
}
