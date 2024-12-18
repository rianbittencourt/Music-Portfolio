const { MongoClient } = require('mongodb')
const express = require('express')
const app = express()

// URL de conexão do MongoDB Atlas
const uri = process.env.MONGODB_URI



async function getSpotifyLinks() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  try {
    await client.connect()
    console.log('Conexão com o MongoDB estabelecida com sucesso!')

    const database = client.db('Links') // Nome da sua base de dados
    const collection = database.collection('Spotify') // Nome da sua coleção

    // Consulta para buscar todos os documentos na coleção
    const documents = await collection.find({}).toArray()

    return documents // Retorna os documentos recuperados
  } finally {
    await client.close()
  }
}

// Rota para obter os dados da coleção
app.put('/api/update-spotify-links', async (req, res) => {
  console.log('Rota PUT foi acessada.')
  try {
    const { spotifyLinks } = req.body // Acesse os dados como req.body.spotifyLinks
    console.log('Dados recebidos:', spotifyLinks);

    // Inicialize a conexão com o MongoDB
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    await client.connect()
    const database = client.db('Links') // Nome da sua base de dados
    const collection = database.collection('Spotify') // Nome da sua coleção

    // Atualizar os links no banco de dados
    for (const link of spotifyLinks) {
      const filter = { _id: link._id }
      const updateDoc = {
        $set: { spotifyIframeLink: link.spotifyIframeLink },
      }
      await collection.updateOne(filter, updateDoc)
    }

    // Feche a conexão com o MongoDB
    client.close()

    res.json({ message: 'Links do Spotify atualizados com sucesso!' })
  } catch (error) {
    console.error('Erro ao atualizar links do Spotify:', error)
    res.status(500).json({ error: 'Erro ao atualizar links do Spotify.' })
  }
})
app.get('/api/spotifyLinks', async (req, res) => {
  console.log('Rota GET foi acessada.')
  try {
    const spotifyLinks = await getSpotifyLinks()
    res.json(spotifyLinks)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar os dados' })
  }
})



module.exports = app

// ... O restante da configuração do Express
