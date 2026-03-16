import { createContext, useContext } from "react";

export const DialogPortalContainerContext = createContext<HTMLElement | null>(
  null,
);

export const useDialogPortalContainer = () => {
  return useContext(DialogPortalContainerContext);
};
