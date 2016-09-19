import menu from './model'

export function index (req, res) {
  menu.findAll()
    .then(ms => res.send(ms))
    .catch(err => res.status(500).send(err))
}

export function show (req, res) {
  menu.findById(req.params.id)
    .then(m => res.send(m))
    .catch(err => res.status(500).send(err))
}

export function create (req, res) {
  menu.create(req.body)
    .then(m => res.send(m))
    .catch(err => res.status(500).send(err))
}

export function update (req, res) {
  menu.findById(req.params.id)
    .then(m => m.updateAttributes(req.body))
    .then(m => res.send(m))
    .catch(err => res.status(500).send(err))
}

export function remove (req, res) {
  menu.findById(req.params.id)
    .then(m => m.destroy(req.body))
    .then(m => res.status(200))
    .catch(err => res.status(500).send(err))
}
