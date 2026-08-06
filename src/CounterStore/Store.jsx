import { create } from "zustand";
import { persist,createJSONStorage} from "zustand/middleware";

const useCounterStore = create(
  persist(
    (set) => ({
      cart: [],
      message: [],
      action: {
        add: (product) => {
          set((state) => {
            const isExist = state.cart.find(
              (item) => item.id === Number(product.id)
            );
            if (isExist) {
              return {
                message: "قبلا به سبد خرید اضافه شده است",
              };
            }
            return {
              cart: [...state.cart, { ...product, number: 1 }],
              message: "به سبد خرید اضافه شد",
            };
          });
        },
        reset: (product) => {
          set((state) => {
            return {
              message: [],
            };
          });
        },
        remove: (id) => {
          set((state) => ({
            cart: state.cart.filter((item) => item.id !== id),
          }));
        },
      },
      increase: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, number: (item.number || 1) + 1 } : item
          ),
        })),
      decrease: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, number: item.number - 1 } : item
          ),
        })),
    }),
    {
      name: "counter-storage", 
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export default useCounterStore;
