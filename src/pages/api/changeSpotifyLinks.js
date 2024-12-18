export async function changeSpotifyLinks(spotifyLinks) {
  try {
    const response = await fetch(
      'https://dreez1n-portifolio.vercel.app/api/update-spotify-links',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ spotifyLinks }),
      },
    )

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`)
    }

    const data = await response.json()

    return data // Você pode retornar uma mensagem de sucesso ou algum outro dado relevante se necessário
  } catch (error) {
    console.error('Erro ao atualizar links do Spotify:', error)
    return { error: 'Erro ao atualizar links do Spotify.' }
  }
}
