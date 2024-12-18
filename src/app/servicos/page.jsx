import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoRec from '@/images/logos/logo-rec.svg'
import logoBeat from '@/images/logos/logo-beat.svg'
import logoMaster from '@/images/logos/logo-master.svg'
import logoMixer from '@/images/logos/logo-mixer.svg'

const projects = [
  {
    name: 'Mixagem',
    description:
      'Tem uma gravação para mixar? Usando equipamentos analógicos e ferramentas digitais, vamos chegar na sonoridade perfeita para o seu trabalho!',
    logo: logoMixer,
  },
  {
    name: 'Gravação',
    description:
      'Terminou a composição do seu single, EP, ou álbum? Chegou a hora de gravar! Vamos mergulhar no mundo da gravação nos melhores estúdios do Brasil, trazendo a sonoridade que você visualiza!',

    logo: logoRec,
  },
  {
    name: 'Masterização',
    description:
      'O processo de masterização é a última etapa para lançar o seu trabalho. Usando equipamentos analógicos e digitais, finalizo a sua mixagem nos padrões das principais plataformas de streaming.',

    logo: logoMaster,
  },
  {
    name: 'Criação de Beat',
    description:
      'Quer criar batidas incríveis? Com nossa paixão e expertise, vamos dar vida às suas ideias musicais. Deixe a criação de beats com a gente e vamos transformar sua visão em realidade!',

    logo: logoBeat,
  },
]

export const metadata = {
  title: 'Serviços',
  description: 'Serviços que Ofereço como Produtor Musical',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Serviços"
      intro="Uma música é mais do que apenas som - um projeto musical incrível envolve uma mixagem bacana, uma gravação de alta qualidade, uma vibe harmoniosa e uma produção de primeira."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-2"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href="#">{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
