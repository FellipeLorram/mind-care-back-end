import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface IJWTPayload {
  credentials: {
    id: string;
    email: string;
  };
}

const loginRequired = (
  req: Request | any,
  res: Response,
  next: NextFunction,
): Response | void => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({
      message: 'Login required.',
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET) as IJWTPayload;

    const { id, email } = data.credentials;
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (error) {
    return res.status(401).json({
      message: 'Session expired.',
    });
  }
};

export { loginRequired };
