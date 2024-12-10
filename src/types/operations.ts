import handler from "./handler";

type operations = Map<`GET:${string}`, handler>;

export default operations;
