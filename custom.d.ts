declare namespace Express {
   export interface Request {
      userId?: number;
   }
}

declare namespace SocketIO {
    export interface Socket {
        userId?: number;
    }
}