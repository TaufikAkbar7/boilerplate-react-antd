// Store
import type { TRootDispatch, TRootState } from "~/plugins/redux";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { appSetLanguage } from "~/features/app/redux/app-slice-redux";

export const useAppDispatch: () => TRootDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export const useApp = () => {
  // Hook
  const currentLocale = useAppSelector((state) => state.app.appLocale);

  return { currentLocale, appSetLanguage };
};
