import { MenuItem, DietaryType } from '../types/restaurant';

export interface MenuFilterOptions {
  category?: string;
  dietary?: 'all' | DietaryType;
  searchQuery?: string;
  onlyPopular?: boolean;
}

/**
 * Filter menu items according to category, dietary preference, and search keywords
 */
export function filterMenuItems(items: MenuItem[], options: MenuFilterOptions): MenuItem[] {
  return items.filter((item) => {
    // Category filter
    if (options.category && options.category !== 'all' && item.category !== options.category) {
      return false;
    }

    // Dietary filter
    if (options.dietary && options.dietary !== 'all') {
      if (item.dietary !== options.dietary) {
        return false;
      }
    }

    // Popular only filter
    if (options.onlyPopular && !item.isPopular) {
      return false;
    }

    // Search query filter (matches name, description, category, allergens)
    if (options.searchQuery && options.searchQuery.trim().length > 0) {
      const q = options.searchQuery.toLowerCase().trim();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchCat = item.category.toLowerCase().includes(q);
      const matchAllergens = item.allergens?.some((a) => a.toLowerCase().includes(q));

      if (!matchName && !matchDesc && !matchCat && !matchAllergens) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Formats Indian Rupee currency representation
 */
export function formatINR(amount: number): string {
  return `₹ ${amount.toLocaleString('en-IN')}`;
}

/**
 * Calculate count of dishes by category and dietary
 */
export function calculateMenuStats(items: MenuItem[]) {
  const total = items.length;
  const vegCount = items.filter((i) => i.dietary === 'veg').length;
  const nonVegCount = items.filter((i) => i.dietary === 'non-veg').length;
  return { total, vegCount, nonVegCount };
}
