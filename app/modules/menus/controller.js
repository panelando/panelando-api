import menu from './model'

export function index (req, res) {
  menu.findAll()
    .then(ms => res.send(ms))
    .catch(err => res.sendStatus(500))
}

export function show (req, res) {
  menu.findById(req.params.id)
    .then(m => res.send(m))
    .catch(err => res.sendStatus(500))
}

export function create (req, res) {
  menu.create(req.body)
    .then(m => res.send(m))
    .catch(err => res.sendStatus(500))
}

export function update (req, res) {
  menu.findById(req.params.id)
    .then(m => m.updateAttributes(req.body))
    .then(m => res.send(m))
    .catch(err => res.sendStatus(500))
}

export function remove (req, res) {
  menu.findById(req.params.id)
    .then(m => m.destroy(req.body))
    .then(m => res.sendStatus(200))
    .catch(err => res.sendStatus(500))
}
