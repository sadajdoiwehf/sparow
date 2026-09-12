// @ts-check
import { module } from "@prisma/composer";
import sparowService from "./service.mjs";

export default module("sparow", ({ provision }) => {
  provision(sparowService);
});
