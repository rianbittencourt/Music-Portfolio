export async function fetchSpotifyLinks() {
    try {
      const response = await fetch('https://dreez1n-portifolio.vercel.app/api/spotifyLinks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
  
      const data = await response.json();
    
  
      return {
        props: {
          spotifyLinks: data,
        },
      };
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      return {
        props: {
          spotifyLinks: [],
        },
      };
    }
  }