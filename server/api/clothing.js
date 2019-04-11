const router = require('express').Router()
const {ClothingItem} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const items = await ClothingItem.findAll()
    res.json(items)
  } catch (err) {
    next(err)
  }
})

router.get('/:itemId', async (req, res, next) => {
  try {
    const item = await ClothingItem.findById(req.params.itemId)
    res.json(item)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  console.log('in post route')
  try {
    const item = await ClothingItem.create(req.body)
    res.json(item)
  } catch (error) {
    next(error)
  }
})

//.then syntax
router.put('/:itemId', (req, res, next) => {
  ClothingItem.findById(req.params.itemId)
    .then(item => item.update(req.body))
    .then(item => res.json(item))
    .catch(next)
})

router.delete('/:itemId', (req, res, next) => {
  ClothingItem.destroy({
    where: {
      id: req.params.itemId
    }
  })
    .then(() => res.status(204).end())
    .catch(next)
})
