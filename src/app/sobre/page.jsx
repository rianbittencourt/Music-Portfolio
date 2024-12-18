import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { PhoneIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import {
  YoutubeIcon,
  InstagramIcon,
  SpotifyIcon,
  SoundCloudIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Sobre',
  description: 'Drez1nn Produtor Músical do Rio de Janeiro',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Drez1nn, Produtor Musical do Rio de Janeiro.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Minha paixão pela música e pela produção musical começou desde
              cedo. Desde então, mergulhei de cabeça no mundo da música, e hoje
              sou um produtor musical com sede aqui no Rio de Janeiro, a cidade
              maravilhosa.
            </p>

            <p>
              Mas olha, não é só batida não. Mixagem e produção musical também
              são essenciais. Eu me dedico de verdade para que cada música que
              passa pelas minhas mãos fique com um som incrível. A técnica é
              importante, claro, mas a criatividade é o que dá aquele toque
              especial.
            </p>
            <p>
              Se você, artista ou músico, está procurando alguém para mixar,
              criar batidas ou produzir sua música aqui no Rio de Janeiro, tamo
              junto! Vamos trabalhar juntos e criar algo único.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.youtube.com/@Drez1nn420" target="_blank" icon={YoutubeIcon}>
              Seguir no Youtube
            </SocialLink>
            <SocialLink href="https://www.instagram.com/drez1nnn/" target="_blank" icon={InstagramIcon} className="mt-4 hover:group-scale-[1.2]">
              Seguir no Instagram
            </SocialLink>
            <SocialLink href="https://open.spotify.com/intl-pt/artist/2qdwFyyeXCcDIZF8a0J16g" target="_blank" icon={SpotifyIcon} className="mt-4">
              Seguir no Spotify
            </SocialLink>
            <SocialLink href="https://soundcloud.com/andrez1n" target="_blank" icon={SoundCloudIcon} className="mt-4">
              Seguir no SoundCloud
            </SocialLink>
            <SocialLink
              href="mailto:andreluizmarques2209@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              andreluizmarques2209@gmail.com
            </SocialLink>
            <SocialLink
              href="https://api.whatsapp.com/send?phone=5521979122161"
              target="_blank"
              icon={PhoneIcon}
              className="mt-2"
            >
              +55 (21) 97912-2161
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
