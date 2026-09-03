'use client';
import { createContext, useContext, useState, type ReactNode } from 'react';
import { validateLine, type CartLine } from '@/lib/order-model';

type CartContext = { cart: CartLine[]; add: (line: CartLine) => void; changeQty: (id: string, qty: number) => void; remove: (id: string) => void; clear: () => void };
const Context = createContext<CartContext | null>(null);
export function OrderProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const value: CartContext = {
    cart,
    add(line) { if (!validateLine(line)) setCart(previous => [...previous, line]); },
    changeQty(id, qty) { if (Number.isInteger(qty) && qty >= 1 && qty <= 20) setCart(previous => previous.map(line => line.id === id ? { ...line, qty } : line)); },
    remove(id) { setCart(previous => previous.filter(line => line.id !== id)); },
    clear() { setCart([]); },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useOrder() { const value = useContext(Context); if (!value) throw new Error('OrderProvider is missing'); return value; }
