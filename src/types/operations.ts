import handler from "./handler";

type operations = Map<`GET:${string}`, handler>;
export type specificOperations = Map<`GET:${string}`, handler | "get-view">;

export default operations;
