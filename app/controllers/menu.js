import menu from 'models/menu'

export function index (req, res) {
  menu.findAll()
    .then(xs => res.send(xs))
    .catch(err => res.status(500).send(err))
}

export function show (req, res) {
  menu.findById(req.params.id)
    .then(x => res.send(x))
    .catch(err => res.status(500).send(err))
}

export function create (req, res) {
  menu.create(req.body)
    .then(x => res.send(x))
    .catch(err => res.status(500).send(err))
}

export function update (req, res) {
  menu.findById(req.params.id)
    .then(x => x.updateAttributes(req.body))
    .then(x => res.send(x))
    .catch(err => res.status(500).send(err))
}

export function remove (req, res) {
  menu.findById(req.params.id)
    .then(x => x.destroy(req.body))
    .then(x => res.status(200))
    .catch(err => res.status(500).send(err))
}
