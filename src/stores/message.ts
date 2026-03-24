import { create } from "zustand"
import {type Messages, type Commands} from "../../types/generic"

type CurCommands = {
    commands: Commands,
    setCommands: (newCommands: Messages) => void
}

export const useCurCommands = create<CurCommands>((set) => ({
    commands : [],
    setCommands : (newCommands:Messages) => set((state) => ({...state, commands:newCommands}))
}))