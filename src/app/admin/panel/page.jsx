'use client'

import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { SpotifyIcon } from '@/components/SocialIcons'
import { YoutubeIcon } from '@/components/SocialIcons'
import { fetchSpotifyLinks } from '@/pages/api/fetchSpotifyLinks'
import { changeSpotifyLinks } from '@/pages/api/changeSpotifyLinks'
import { TailSpin } from 'react-loader-spinner'
import { useRouter } from 'next/navigation'


const navigation = [
  { name: 'Spotify', href: '#', icon: SpotifyIcon, current: true },
  { name: 'Youtube', href: '#', icon: YoutubeIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Panel() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [spotifyLinks, setSpotifyLinks] = useState([])

  const router = useRouter()

  function limparLocalStorage() {
    localStorage.clear() 
    console.log('LocalStorage apagado')
  }


  const intervaloEmMilissegundos = 20 * 60 * 1000


  const temporizador = setInterval(limparLocalStorage, intervaloEmMilissegundos)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchSpotifyLinks()
        setSpotifyLinks(data.props.spotifyLinks) 
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error)
       
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
  
    const authenticated = localStorage.getItem('authenticated') === 'true'

    if (!authenticated) {
      router.push('/admin')
    }
  }, [])

  const onUpdateLink = (linkId, newLink) => {
   
    const updatedLinks = [...spotifyLinks]
    console.log(updatedLinks)

    
    const linkIndex = updatedLinks.findIndex((link) => link._id === linkId)

 
    if (linkIndex !== -1) {
      
      updatedLinks[linkIndex].spotifyIframeLink = newLink

    
      setSpotifyLinks(updatedLinks)
    }
  }

  const handleUpdateClick = async () => {
    try {
     
      const response = await changeSpotifyLinks(spotifyLinks)

     
      if (response.error) {
       
        console.error('Erro ao atualizar links do Spotify:', response.error)
      } else {
      
        console.log('Links do Spotify atualizados com sucesso:', response)
     
      }
    } catch (error) {
      console.error('Erro ao atualizar links do Spotify:', error)
    }
  }

  const handleResetAuthentication = () => {
    localStorage.setItem('authenticated', 'false')
    router.push('/admin')
  }

  return (
    <>
      <div className="h-[100%] bg-cyan-900 bg-cover ">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 " />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

     
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
            <nav className="mt-10 flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-200 text-indigo-600'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? 'text-indigo-600'
                                : 'text-gray-400 group-hover:text-indigo-600',
                              'h-6 w-6 shrink-0',
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="-mx-6 mt-auto bg-red-900 hover:bg-red-900/95 ">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white "
                    onClick={handleResetAuthentication}
                  >
                    <span aria-hidden="true">Sair</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
            Dashboard
          </div>
          <a href="#">
            <span className="sr-only">Your profile</span>
          </a>
        </div>

        <main className="  lg:pl-72 ">
          <div className="">
            <div className=" ">
              {' '}
              <div className="relative m-auto flex h-[28rem] flex-col  items-center justify-between text-center ">
                <h3 className="text-2xl text-white">ALTERAR MUSICAS SPOTIFY</h3>
                {spotifyLinks.map((link) => (
                  <div key={link._id} className="relative ">
                    <label
                      htmlFor="email"
                      className="absolute  inset-y-0 left-0  z-40 pl-2 text-xl font-medium text-cyan-900"
                    >
                      {link._id}
                    </label>

                    <input
                      className="relative w-[30rem] rounded-md border-0 py-1.5  pl-10 text-left text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      type="text"
                      placeholder={link.spotifyIframeLink}
                      onChange={(e) => onUpdateLink(link._id, e.target.value)}
                    />
                  </div>
                ))}
                <button
                  onClick={handleUpdateClick}
                  className="bottom-0  rounded bg-indigo-500 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 "
                >
                  Atualizar
                </button>
              </div>
            </div>
          </div>
          <div className=" mt-7 px-[20rem] text-center ">
            <h3 className="mb-5 text-2xl text-white/25">PRÉVIA</h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 ">
              {spotifyLinks &&
              Array.isArray(spotifyLinks) &&
              spotifyLinks.length > 0 ? (
                spotifyLinks.map((linkData) => (
                  <iframe
                    key={linkData._id}
                    className="rounded-2xl"
                    src={linkData.spotifyIframeLink}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                ))
              ) : (
                <div className="flex h-[500px] w-[200%] items-center justify-center ">
                  <TailSpin
                    height="80"
                    width="80"
                    color="#ffff"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
