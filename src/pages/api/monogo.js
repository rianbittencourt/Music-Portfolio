const { MongoClient } = require('mongodb')

// URL de conexão do MongoDB Atlas
const uri = process.env.MONGODB_URI

// Conecte-se à base de dados
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function main() {
  try {
    await client.connect()
    console.log('Conexão com o MongoDB estabelecida com sucesso!')

    const database = client.db('Links') // Nome da sua base de dados
    const collection = database.collection('Spotify') // Nome da sua coleção

    // Consulta para listar todos os documentos
    const documents = await collection.find({}).toArray()

    console.log('Documentos da coleção:')
    console.log(documents)
  } finally {
    await client.close()
  }
}

main().catch(console.error)
