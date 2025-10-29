import { CatApi } from "../datasources/catapi";
import { Breed } from "../types";

type Ctx = { catapi: CatApi };

export const breedResolvers = {
  Query: {
    async breed(_: unknown, args: { id: string }, ctx: Ctx): Promise<Breed | null> {
      if (!args.id) return null;
      return ctx.catapi.getBreedById(args.id);
    }
  }
};
