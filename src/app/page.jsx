import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  SoundCloudIcon,
  InstagramIcon,
  SpotifyIcon,
  YoutubeIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import Projects from './servicos/page'
import Contact from './contato/page'
import { MusicalNoteIcon } from '@heroicons/react/20/solid'


function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            DREEZ1Nn
          </h1>
          <div className="ml-1 mt-6 flex gap-6">
            <SocialLink
              href="https://www.youtube.com/@Drez1nn420"
              target="_blank"
              aria-label="Seguir no Youtube"
              icon={YoutubeIcon}
            />
            <SocialLink
              href="https://www.instagram.com/drez1nnn/"
              target="_blank"
              aria-label="Seguir no Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://open.spotify.com/intl-pt/artist/2qdwFyyeXCcDIZF8a0J16g"
              target="_blank"
              aria-label="Seguir no Spotify"
              icon={SpotifyIcon}
            />
            <SocialLink
              href="https://soundcloud.com/andrez1n"
              target="_blank"
              aria-label="Seguir no SoundCloud"
              icon={SoundCloudIcon}
            />
          </div>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Olá, eu sou Andre Luiz, também conhecido como Drez1nn. Moro no Rio
            de Janeiro 🇧🇷 e sou produtor musical de Trap/Rap. Confira meu
            trabalho{' '}
            <a href="/musicas">
              <b className="text-red-500 hover:text-red-600">clicando aqui.</b>
            </a>{' '}
            Eu me especializo em Mixagem, Masterização e Criação de Beats.
          </p>

          <div className="mt-5 inline-flex  w-[100%] gap-x-4 sm:w-[75%]">
            <a href="/sobre" className="w-full">
              <button
                type="button"
                className="relative mt-5 inline-flex w-full items-center  justify-center gap-x-1.5 rounded-full bg-red-600/75 px-4 py-2.5 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset  ring-red-700/75 hover:bg-red-700/80  "
              >
                Sobre
              </button>
            </a>
            <a href="/contato" className="w-full">
              <button
                type="button"
                className="relative mt-5 inline-flex w-full items-center  justify-center gap-x-1.5 rounded-full bg-transparent px-4 py-2.5 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset hover:bg-red-600/75 hover:ring-red-700/75  "
              >
                Contato
              </button>
            </a>
          </div>
        </div>
      </Container>
      <Photos />
      <div className=" text-center">
        <a href="/musicas">
          <button
            type="button"
            className="mt-5 inline-flex items-center gap-x-1.5 rounded-full bg-transparent px-4 py-2.5 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset  hover:bg-red-600/75 hover:ring-red-700/75  "
          >
            <MusicalNoteIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Conferir Músicas
          </button>
        </a>
      </div>
      <Projects></Projects>
      <Contact></Contact>
    </>
  )
}
