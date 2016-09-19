import recipe from './model'

export function index (req, res) {
  recipe.findAll()
    .then(xs => res.send(xs))
    .catch(err => res.sendStatus(500))
}

export function show (req, res) {
  recipe.findById(req.params.id)
    .then(x => res.send(x))
    .catch(err => res.sendStatus(500))
}

export function create (req, res) {
  recipe.create(req.body)
    .then(x => res.send(x))
    .catch(err => res.sendStatus(500))
}

export function update (req, res) {
  recipe.findById(req.params.id)
    .then(x => x.updateAttributes(req.body))
    .then(x => res.send(x))
    .catch(err => res.sendStatus(500))
}

export function remove (req, res) {
  recipe.findById(req.params.id)
    .then(x => x.destroy(req.body))
    .then(() => res.sendStatus(200))
    .catch(err => res.sendStatus(500))
}
