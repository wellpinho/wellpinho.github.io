const { Router } = require('express')
const Portolio = require('./../../models/Portfolio')
const portfolio = Router()


portfolio.get('/portfolio', async (req, res) => {
  const data = await Portolio.find({})

  try {
    return res.status(200).send({ code: 200, data })    
  } catch (error) {
    res.status(500).send(error);
  }
})

portfolio.get('/portfolio/:slug', async (req, res) => {
  try {
    const { slug } = req.params
    const data = await Portolio.findOne({ slug })

    if (!data) {
      return res.status(400).send('Portfolio not found!')
    }
    return res.status(200).send({ code: 200, data })
  } catch (error) {
    console.log(error)
  }
})

portfolio.post('/portfolio', async (req, res) => {
  const portfolio = new Portolio(req.body)

  try {
    await portfolio.save()
    res.status(200).send(portfolio)
  } catch (error) {
    res.status(500).send(error);
  }
})

portfolio.put('/portfolio/:id', async (req, res) => {
  try {
    const { id } = req.params
    await Portolio.updateOne({ id }, req.body)
    await Portolio.save()
    es.status(200).send({ code: 200, message: 'Updated successfully' })
  } catch (error) {
    res.status(500).send(error);
  }
})

portfolio.delete('/portfolio/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const portfolio = await Portolio.deleteOne({id})

    if (!portfolio) {
      return res.status(404).send('No item found!')
    }

    return res.status(200).send(portfolio)
  } catch (error) {
    res.status(500).send(error);
  }
})
module.exports = portfolio