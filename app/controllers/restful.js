import { mapObjIndexed } from 'ramda'

const methods = {
  index,
  show,
  create,
  update,
  remove
}

export default function restful (model) {
  const mapper = (val, key) => val.bind(null, model)
  return mapObjIndexed(mapper, methods)
}

function index (model, req, res) {
  model.findAll()
    .then(xs => res.send(xs))
    .catch(err => res.status(500).send(err))
}

function show (model, req, res) {
  model.findById(req.params.id)
    .then(x => res.send(x))
    .catch(err => res.status(500).send(err))
}

function create (model, req, res) {
  model.create(req.body)
    .then(x => res.send(x))
    .catch(err => res.status(500).send(err))
}

function update (model, req, res) {
  model.findById(req.params.id)
    .then(x => x.updateAttributes(req.body))
    .then(x => res.send(x))
    .catch(err => res.status(500).send(err))
}

function remove (model, req, res) {
  model.findById(req.params.id)
    .then(x => x.destroy(req.body))
    .then(() => res.status(200))
    .catch(err => res.status(500).send(err))
}
