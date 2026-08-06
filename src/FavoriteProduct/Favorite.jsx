import { create } from "zustand";
import { persist,createJSONStorage } from "zustand/middleware";
const useFavorite = create(
    persist(
        (set) => ({
            cart:[],
            action:{
                add : (product) => {
                    set((state) => {
                       const isExite = state.cart.find((item) => {
                        return item.id === Number(product.id)
                       })
                       if(isExite) {
                        return state;
                       }
                       return{
                        cart: [...state.cart,{...product}]
                       }
                    })
                },
                remove : (id) => {
                    set((state) => {
                        return{
                            cart:state.cart.filter((item) => Number(item.id )!== id)
                        }
                    })
                }
            }
        }),
        {
            name:'favorite-storage',
            storage: createJSONStorage(() => localStorage)
        }
    )
)
export default useFavorite