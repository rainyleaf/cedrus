const router = require('express').Router()
const {Item} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const items = await Item.findAll({
      attributes: ['text', 'done']
    })
    res.json(items)
  } catch (err) {
    next(err)
  }
})

router.get('/:itemId', async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.itemId)
    res.json(item)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  console.log('in post route')
  try {
    const item = await Item.create(req.body)
    res.json(item)
  } catch (error) {
    next(error)
  }
})

//.then syntax
router.put('/:itemId', (req, res, next) => {
  Item.findById(req.params.itemId)
    .then(item => item.update(req.body))
    .then(item => res.json(item))
    .catch(next)
})

router.delete('/:itemId', (req, res, next) => {
  Item.destroy({
    where: {
      id: req.params.itemId
    }
  })
    .then(() => res.status(204).end())
    .catch(next)
})
