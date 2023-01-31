import { create } from 'zustand'

type State = {
  count: number
}

type Actions = {
  increment: () => void
  decrement: () => void
  incrementAsync: (count: number) => Promise<void>
  incrementIfOdd: (count: number) => void
}

export const useCountStore = create<State & Actions>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  incrementAmount: (count: number) => set((state) => ({ count: state.count + count })),
  incrementAsync: async (count: number) =>{
    await new Promise((resolve) => setTimeout(resolve, 1000))
    set((state) => ({ count: state.count + count }))
  },
  incrementIfOdd: (count: number) => {
    set((state) => ({ count: state.count % 2 === 0 ? state.count : state.count + count }))
  },
}))