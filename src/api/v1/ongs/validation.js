import * as Yup from 'yup';

export async function validationStore(req, res, next) {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    whatsapp: Yup.string().required(),
    city: Yup.string().required(),
    uf: Yup.string().required(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({
      error: 'Validation failure',
    });
  }

  return next();
}

export async function validationShow(req, res, next) {
  return next();
}

export async function validationUpdate(req, res, next) {
  return next();
}
