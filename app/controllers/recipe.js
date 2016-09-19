import recipe from 'models/recipe'

export function index (req, res) {
  recipe.findAll()
    .then(xs => res.send(xs))
    .catch(err => res.status(500).send(err))
}

export function show (req, res) {
  recipe.findById(req.params.id)
    .then(x => res.send(x))
    .catch(err => res.status(500).send(err))
}

export function create (req, res) {
  recipe.create(req.body)
    .then(x => res.send(x))
    .catch(err => res.status(500).send(err))
}

export function update (req, res) {
  recipe.findById(req.params.id)
    .then(x => x.updateAttributes(req.body))
    .then(x => res.send(x))
    .catch(err => res.status(500).send(err))
}

export function remove (req, res) {
  recipe.findById(req.params.id)
    .then(x => x.destroy(req.body))
    .then(() => res.status(200))
    .catch(err => res.status(500).send(err))
}
