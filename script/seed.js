'use strict'

const db = require('../server/db')
const {User, Item} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])
  const items = await Promise.all([
    Item.create({userId: 1, category: 'shorts', imageUrl: 'https://www.rei.com/media/product/143643', dominantColor: 'red', heaviness: 1}),
    Item.create({userId: 1, category: 'pants', imageUrl: 'https://oldnavy.gap.com/webcontent/0015/859/032/cn15859032.jpg', dominantColor: 'pink', heaviness: 3}),
    Item.create({userId: 1, category: 'top', imageUrl: 'https://target.scene7.com/is/image/Target/GUEST_5722806b-5fc2-4cd0-b619-a7e5f2ea2726?wid=488&hei=488&fmt=pjpeg', dominantColor: 'blue', heaviness: 2}),

  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${items.length} items`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
