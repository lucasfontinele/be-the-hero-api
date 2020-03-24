import crypto from 'crypto';
import connection from '../../../database/connection';

export async function index(req, res) {
  const ongs = await connection('ongs').select('*');

  return res.json(ongs);
}

export async function store(req, res) {
  const { name, email, whatsapp, city, uf } = req.body;

  const id = crypto.randomBytes(4).toString('HEX');

  await connection('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf,
  });

  return res.status(201).json({ id });
}

// index, show, store, update, delete
