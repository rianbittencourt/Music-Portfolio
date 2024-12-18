'use client'
import { SimpleLayout } from '@/components/SimpleLayout'
import { SpotifyIcon, YoutubeIcon } from '@/components/SocialIcons'
import { useEffect, useState } from 'react'
import { fetchSpotifyLinks } from '@/pages/api/fetchSpotifyLinks'
import { Bars } from 'react-loader-spinner'

export default function Musicas() {
  const [spotifyLinks, setSpotifyLinks] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchSpotifyLinks()
        setSpotifyLinks(data.props.spotifyLinks) 
        console.log('teste', data.props.spotifyLinks) 
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error)
        
      }
    }

    fetchData()
  }, [])

  return (
    <SimpleLayout
      title="Tracks gravadas e mixadas por mim."
      intro="Aqui apresento algumas das faixas que foram gravadas e mixadas por mim."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40 ">
        <div className="flex">
          <h1 className="mb-10 text-6xl text-gray-600 dark:text-gray-50">
            Spotify
          </h1>
          <SpotifyIcon></SpotifyIcon>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
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
            <div className="flex h-full justify-center   w-auto  lg:items-center lg:justify-center lg:w-[200%]  ">
              <Bars
                height="80"
                width="80"
                color="red"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          )}
        </div>
      </div>
      <div className="mt-10 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40 ">
        <div className="flex ">
          <h1 className="mb-10 text-6xl text-gray-600 dark:text-gray-50">
            Youtube
          </h1>
          <YoutubeIcon></YoutubeIcon>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 ">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/6Ugjyvx_6vI?si=lF9yIxKi9QTkohNC&amp;start=23"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/N-8R3jxUE00?si=5Qsy0BGKXlwulsnI&amp;start=9"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </SimpleLayout>
  )
}
