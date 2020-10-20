import { Router, Response, Request } from 'express';
import graphql from './graphql';
const router = Router();

router.get('/', (_req: Request, res: Response) => res.status(200).json({ message: 'Olá Conta Simples'}));
router.use('/gql', graphql)
export default router ;


