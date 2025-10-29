"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.breedResolvers = void 0;
exports.breedResolvers = {
    Query: {
        async breed(_, args, ctx) {
            if (!args.id)
                return null;
            return ctx.catapi.getBreedById(args.id);
        }
    }
};
