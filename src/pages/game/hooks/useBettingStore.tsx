import { create } from "zustand";
import { CartItem } from "../models/CartItem";
import { message } from "antd";

interface BettingState {
  digits: number;

  selectedStep: number;
  combination?: string;
  straightAmount?: number;
  rumbleAmount?: number;
  cartItems: CartItem[];

  setDigits: (d: number) => void;
  setSelectedStep: (step: number) => void;

  handleKeys: (value: string) => void;
  handleClear: () => void;
  addCombination: () => void;
  removeCombination: (index: number) => void;
  reset: () => void;
}

const initialState = {
  selectedStep: 1,
  combination: undefined,
  straightAmount: undefined,
  rumbleAmount: undefined,
  cartItems: [] as CartItem[],
};

export const useBettingStore = create<BettingState>((set, get) => ({
  ...initialState,
  digits: 3,
  setDigits: (d) => set({ digits: d }),
  setSelectedStep: (step) => set({ selectedStep: step }),
  handleKeys: (value) => {
    const {
      selectedStep,
      combination,
      straightAmount,
      rumbleAmount,
      digits,
      setSelectedStep,
    } = get();

    switch (selectedStep) {
      case 1: {
        const current = combination ?? "";
        const newValue = current.length > 0 ? current + "-" + value : value;

        if (newValue.length >= digits * 2 - 1) {
          setSelectedStep(2);
        }

        if (newValue.length > digits * 2 - 1) {
          set({ straightAmount: parseInt((straightAmount ?? "") + value) });
          return;
        }

        set({ combination: newValue });
        break;
      }

      case 2:
        set({
          straightAmount: parseInt((straightAmount ?? "") + value),
        });
        break;

      case 3:
        set({
          rumbleAmount: parseInt((rumbleAmount ?? "") + value),
        });
        break;
    }
  },

  handleClear: () => {
    const { selectedStep, combination, straightAmount, rumbleAmount } = get();

    switch (selectedStep) {
      case 1: {
        const current = combination ?? "";
        const updated = current.length > 1 ? current.slice(0, -2) : undefined;
        set({ combination: updated });
        break;
      }

      case 2: {
        const updated = Math.floor((straightAmount ?? 0) / 10);
        set({ straightAmount: updated > 0 ? updated : undefined });
        break;
      }

      case 3: {
        const updated = Math.floor((rumbleAmount ?? 0) / 10);
        set({ rumbleAmount: updated > 0 ? updated : undefined });
        break;
      }
    }
  },

  addCombination: () => {
    const {
      combination,
      straightAmount,
      rumbleAmount,
      cartItems,
    } = get();

    if ((straightAmount || rumbleAmount) && combination) {
      const newItem: CartItem = {
        combinaition: combination,
        straightAmount,
        rumbleAmount,
      };

      set({
        cartItems: [...cartItems, newItem],
        combination: undefined,
        straightAmount: undefined,
        rumbleAmount: undefined,
        selectedStep: 1,
      });

      message.success("Combination added to cart");
    } else {
      if (!combination) {
        message.error("Please input your combination");
      } else {
        message.error("Please input your amount");
      }
    }
  },
  removeCombination: (index) => {
    const { cartItems } = get();
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    set({ cartItems: updatedCartItems });
    message.success("Combination removed from cart");
  },
  reset: () => set({ ...initialState }),
}));