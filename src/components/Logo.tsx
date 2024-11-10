import Image from "next/image";

import CreoleProLogo from "@/images/logos/creole-pro-logo.png";

export function Logo(props: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props}>
      <Image
        src={CreoleProLogo}
        width={160}
        height={28}
        alt="CreolePro Logo"
        priority
      />
    </div>
  );
}
