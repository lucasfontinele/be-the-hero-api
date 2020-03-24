import connection from '../../../database/connection';

export default async function store(req, res) {
  const { id } = req.body;

  const ong = await connection('ongs')
    .where('id', id)
    .select('name')
    .first();

  if (!ong) {
    return res.status(400).json({
      error: 'No ong found with this id',
    });
  }

  return res.status(201).json(ong);
}

// index, show, store, update, delete
