import httpStatus from 'http-status-codes';

export function notFound(_, res, next) {
  res.status(httpStatus.NOT_FOUND).json({
    error: 'route not found',
  });

  next();
}

export function test() {}
