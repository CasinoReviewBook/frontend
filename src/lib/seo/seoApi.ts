import { API_CONFIG } from "@/config/api.config";
import error from "next/dist/api/error";

export async function getNewsBySlug(slug: string) {
  try {
    const res = await fetch(`${API_CONFIG.baseURL}/news`, {
      next: {
        revalidate: 3600,
      },
    });

    if (!res.ok) {
      return null;
    }

    const news = await res.json();

    const article = news.find((item: any) => item.slug === slug);

    return article || null;
  } catch (error) {
    console.error("News fetch error", error);

    return null;
  }
}

export async function getAllNews() {
  try {
    const res = await fetch(`${API_CONFIG.baseURL}/news`, {
      next: {
        revalidate: 3600,
      },
    });

    if (!res.ok) {
      return null;
    } else {
      const news = await res.json();
      return news;
    }
  } catch (error) {
    console.error("News fetch error", error);

    return null;
  }
}

export async function getAllCasinos() {
  try {
    const res = await fetch(`${API_CONFIG.baseURL}/casinos`, {
      next: {
        revalidate: 3600,
      },
    });

    if (!res.ok) {
      return null;
    } else {
      const casinos = await res.json();
      return casinos;
    }
  } catch (error) {
    console.error("Casinos fetch error", error);
    return null;
  }
}

export async function getBettingCategoryBySlug(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/casinos/category/${slug}`,
      {
        next: {
          revalidate: 3600,
          tags: [`betting-category-${slug}`],
        },
      },
    );

    if (!res.ok) return null;

    return await res.json();

    // const data = await res.json();

    // return data.category;
  } catch (error) {
    console.error("Failed to fetch betting category:", error);
    return null;
  }
}
export async function getCasinoCategoryBySlug(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/casinos/category/${slug}`,
      {
        next: {
          revalidate: 3600,
          tags: [`betting-category-${slug}`],
        },
      },
    );

    if (!res.ok) return null;

    return await res.json();

    // const data = await res.json();

    // return data.category;
  } catch (error) {
    console.error("Failed to fetch betting category:", error);
    return null;
  }
}

//   try {
//     const res = await fetch(`${API_CONFIG.baseURL}/bonuses`, {
//       next: {
//         revalidate: 3600,
//       },
//     });

//     if (!res.ok) {
//       return null;
//     } else {
//       const bonuses = await res.json();
//       return bonuses;
//     }
//   } catch (error) {
//     console.error("Bonuses fetch error", error);
//     return null;
//   }
// }
