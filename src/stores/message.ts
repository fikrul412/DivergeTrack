import { create } from "zustand"
import { type Messages, type Commands } from "../types/generic"

type CurCommandsState = {
    commands: Commands;
    setCommands: (newCommands: Commands) => void; 
    clearCommands: () => void;
}

export const useCurCommands = create<CurCommandsState>((set) => ({
    commands: [],
    setCommands: (newCommands) => 
        set(() => ({ 
            commands: newCommands ?? [] 
        })),
    clearCommands: () => set({ commands: [] }),
}))