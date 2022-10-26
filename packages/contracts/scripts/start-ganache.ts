import {defaultAccounts} from 'ethereum-waffle'
import Ganache from 'ganache'

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8545

async function main() {
  const ganacheServer = Ganache.server({
    wallet: {
      accounts: defaultAccounts
    },
    logging: {verbose: true},
  })
  await ganacheServer.listen(PORT)
  console.log(`⚡️ Ganache server listening on port ${PORT}.`)
}

main().catch(e => {
  console.error(e)
  process.exit(-1)
})
