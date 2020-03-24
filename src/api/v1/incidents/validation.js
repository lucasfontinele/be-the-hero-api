import * as Yup from 'yup';

export async function validationStore(req, res, next) {
  const schema = Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
    value: Yup.number().required(),
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
