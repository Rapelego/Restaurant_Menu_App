import React, { createContext, ReactNode, useContext, useState } from "react";

export type MenuItem = {
  id: string;
  dish: string;
  description?: string;
  course: "Starter" | "Main" | "Dessert" | string;
  price: string;
};

type MenuContextType = {
  menu: MenuItem[];
  addItem: (item: Omit<MenuItem, "id">) => void;
  removeItem: (id: string) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  const addItem = (item: Omit<MenuItem, "id">) => {
    setMenu((prev) => [...prev, { id: String(prev.length + 1), ...item }]);
  };

  const removeItem = (id: string) => {
    setMenu((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <MenuContext.Provider value={{ menu, addItem, removeItem }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error("useMenu must be used inside MenuProvider");
  return ctx;
};
