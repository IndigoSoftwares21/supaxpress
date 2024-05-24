import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';


const notFoundHandler = ( req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ error: 'Not Found' });
};

const errorHandler: ErrorRequestHandler = (err, req:Request, res:Response, next:NextFunction) => {
    res.status(500).send({
        message: 'An error occurred',
        error: err,
    });

};
export  {
    notFoundHandler,
    errorHandler,
};
