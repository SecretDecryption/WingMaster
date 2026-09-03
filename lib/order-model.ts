import { menuItems, cannedDrinks, dipOptions, wingAddons } from './menu-data';
import { flavours } from './flavours';

export type CartLine = {
  id: string; itemId: string; variantId: string; style: string; flavourIds: string[];
  addonIds: string[]; dip: string; drinks: string[]; sauce: string; notes: string; qty: number;
};
export const sauceOptions = ['Standard sauce', 'Light sauce', 'Sauce on the side'];
export function money(cents: number) { return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(cents / 100); }
export function itemFor(line: CartLine) { return menuItems.find(item => item.id === line.itemId)!; }
export function linePrice(line: CartLine) {
  const item = itemFor(line);
  if (!item) return 0;
  const base = item.variants?.find(v => v.id === line.variantId)?.price ?? item.price;
  return base + wingAddons.filter(a => line.addonIds.includes(a.id)).reduce((sum, a) => sum + a.price, 0);
}
export function totals(lines: CartLine[], tipPercent = 0) {
  const subtotal = lines.reduce((sum, line) => sum + linePrice(line) * line.qty, 0);
  const tax = Math.round(subtotal * .13);
  const tip = Math.round(subtotal * Math.max(0, Math.min(tipPercent, 25)) / 100);
  return { subtotal, tax, tip, total: subtotal + tax + tip };
}
export function validateLine(line: CartLine): string | null {
  const item = itemFor(line);
  if (!item) return 'Choose a menu item.';
  if (!Number.isInteger(line.qty) || line.qty < 1 || line.qty > 20) return 'Choose a quantity from 1 to 20.';
  const variant = item.variants?.find(v => v.id === line.variantId);
  if (item.variants && !variant) return 'Choose a portion.';
  if (item.styles && !item.styles.includes(line.style)) return 'Choose your wing style.';
  const max = variant?.flavours ?? item.flavours ?? 0;
  if (new Set(line.flavourIds).size !== line.flavourIds.length || line.flavourIds.length > max || (max > 0 && line.flavourIds.length === 0)) return `Choose ${max === 1 ? 'one flavour' : `1–${max} flavours`}.`;
  if (line.flavourIds.some(id => !flavours.some(f => f.id === id && f.available))) return 'Choose an available flavour.';
  if (item.id.startsWith('sauce-') && line.flavourIds.some(id => flavours.find(f => f.id === id)?.dry)) return 'Choose a sauce rather than a dry rub for this item.';
  if (line.addonIds.some(id => !item.wing || !wingAddons.some(a => a.id === id)) || new Set(line.addonIds).size !== line.addonIds.length) return 'Check your extras.';
  if ((item.dips || item.dipChoice) && !dipOptions.includes(line.dip)) return 'Choose a dip.';
  if (line.drinks.length !== (item.drinks ?? 0) || line.drinks.some(d => !cannedDrinks.includes(d))) return 'Choose each included drink.';
  if (item.wing && !sauceOptions.includes(line.sauce)) return 'Choose a sauce preference.';
  if (line.notes.length > 300) return 'Keep item notes under 300 characters.';
  return null;
}
export function lineDescription(line: CartLine) {
  const item = itemFor(line);
  const variant = item.variants?.find(v => v.id === line.variantId);
  return [variant?.label, line.style, ...line.flavourIds.map(id => flavours.find(f => f.id === id)?.name),
    ...(item.dips || item.dipChoice ? [line.dip] : []), ...line.drinks,
    ...wingAddons.filter(a => line.addonIds.includes(a.id)).map(a => a.name),
    ...(item.wing && line.sauce !== 'Standard sauce' ? [line.sauce] : [])].filter(Boolean).join(' · ');
}
