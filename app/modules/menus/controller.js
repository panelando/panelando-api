import menu from './model'

export function index (req, res) {
  menu.findAll()
    .then(ms => res.send(ms))
    .catch(err => res.status(500))
}

export function show (req, res) {
  menu.findById(req.params.id)
    .then(m => res.send(m))
    .catch(err => res.status(500))
}

export function create (req, res) {
  menu.create(req.body)
    .then(m => res.send(m))
    .catch(err => res.status(500))
}

export function update (req, res) {
  menu.findById(req.params.id)
    .then(m => m.updateAttributes(req.body))
    .then(m => res.send(m))
    .catch(err => res.status(500))
}

export function remove (req, res) {
  const where = {
    id: req.param.id
  }

  menu.delete(req.param.id, { where })
    .then(m => res.send(m))
    .catch(err => res.status(500))
}
