import fetch from "cross-fetch";

type CatApiBreed = {
  id: string;
  name: string;
  temperament?: string;
  origin?: string;
  description?: string;
  life_span?: string;
  wikipedia_url?: string;
  weight?: { imperial?: string; metric?: string };
};

export class CatApi {
  private base = process.env.CAT_API_BASE || "https://api.thecatapi.com/v1";
  private key = process.env.CAT_API_KEY;

  private headers(): HeadersInit {
    const h: HeadersInit = { "Content-Type": "application/json" };
    if (this.key) h["x-api-key"] = this.key;
    return h;
  }

  async getBreedById(id: string) {
    // /v1/breeds/:breed_id
    const res = await fetch(`${this.base}/breeds/${id}`, { headers: this.headers() });
    if (!res.ok) return null;
    const b = (await res.json()) as CatApiBreed;

    // Imagen principal de la raza (si existe)
    const imgRes = await fetch(
      `${this.base}/images/search?breed_ids=${encodeURIComponent(id)}&limit=1`,
      { headers: this.headers() }
    );
    let image_url: string | null = null;
    if (imgRes.ok) {
      const arr = (await imgRes.json()) as Array<{ url?: string }>;
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
