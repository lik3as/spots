import { IncomingMessage, ServerResponse } from "http";

export type pageRequestHandler = (res: ServerResponse) => void;
export type assetRequestHandler = (req: IncomingMessage, res: ServerResponse) => void

type handler = pageRequestHandler | assetRequestHandler;

export default handler;
