import Image from 'next/image'

import CreoleProLogo from '@/images/logos/creole-pro-logo.png';

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <Image
            src={CreoleProLogo}
            width={160}
            height={28}
            alt="Picture of the author"
        />
    )
  }
  