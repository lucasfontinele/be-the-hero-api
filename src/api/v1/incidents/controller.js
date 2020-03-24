import connection from '../../../database/connection';

export async function store(req, res) {
  const { title, description, value } = req.body;
  const ong_id = req.headers.authorization;

  const [id] = await connection('incidents').insert({
    title,
    description,
    value,
    ong_id,
  });

  return res.status(201).json({ id });
}

export async function index(req, res) {
  const { page = 1 } = req.query;

  const [count] = await connection('incidents').count('id');

  const incidents = await connection('incidents')
    .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
    .select([
      'incidents.*',
      'ongs.name',
      'ongs.email',
      'ongs.whatsapp',
      'ongs.city',
      'ongs.uf',
    ])
    .limit(5)
    .offset((page - 1) * 5);

  res.header('X-Total-Count', count['count(`id`)']);

  return res.json(incidents);
}

export async function remove(req, res) {
  const { id } = req.params;
  const ong_id = req.headers.authorization;

  const incident = await connection('incidents')
    .where('id', id)
    .select('*')
    .first();

  if (incident.ong_id !== ong_id) {
    return res.status(401).json({
      error: 'Operation not permitted.',
    });
  }

  await connection('incidents')
    .where('id', id)
    .delete();

  return res.status(204).send();
}

export async function show(req, res) {
  const { id } = req.params;

  const incident = await connection('incidents')
    .where('id', id)
    .select('*')
    .first();

  return res.json(incident);
}
