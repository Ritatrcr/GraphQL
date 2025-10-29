"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatApi = void 0;
const cross_fetch_1 = __importDefault(require("cross-fetch"));
class CatApi {
    base = process.env.CAT_API_BASE || "https://api.thecatapi.com/v1";
    key = process.env.CAT_API_KEY;
    headers() {
        const h = { "Content-Type": "application/json" };
        if (this.key)
            h["x-api-key"] = this.key;
        return h;
    }
    async getBreedById(id) {
        // /v1/breeds/:breed_id
        const res = await (0, cross_fetch_1.default)(`${this.base}/breeds/${id}`, { headers: this.headers() });
        if (!res.ok)
            return null;
        const b = (await res.json());
        // Imagen principal de la raza (si existe)
        const imgRes = await (0, cross_fetch_1.default)(`${this.base}/images/search?breed_ids=${encodeURIComponent(id)}&limit=1`, { headers: this.headers() });
        let image_url = null;
        if (imgRes.ok) {
            const arr = (await imgRes.json());
            image_url = arr?.[0]?.url ?? null;
        }
        return {
            id: b.id,
            name: b.name,
            temperament: b.temperament,
            origin: b.origin,
            description: b.description,
            life_span: b.life_span,
            wikipedia_url: b.wikipedia_url,
            weight_imperial: b.weight?.imperial,
            weight_metric: b.weight?.metric,
            image_url
        };
    }
}
exports.CatApi = CatApi;
