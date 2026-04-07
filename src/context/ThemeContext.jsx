import { createContext, useContext } from "react";
import { light } from "../constants/theme";

export const Ctx = createContext(light);
export function useT() { return useContext(Ctx); }
