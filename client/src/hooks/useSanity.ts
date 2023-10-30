import { useContext } from "react";
import { SanityContext } from "../context/SanityContext";

export function useSanity() {
  return useContext(SanityContext)!;
}
