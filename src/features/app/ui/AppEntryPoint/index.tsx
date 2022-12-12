// React
import { Suspense, useEffect } from "react";

// Router
import { useRouter } from "~/plugins";

// Antd
import { ConfigProvider as AntdConfigProvider } from "antd";

// Custom Hooks
import { useApp } from "~/features/app/hooks/app-hook";

// Constant
import { APP_LANGUAGE_LIST } from "~/features/app/constants/app-constants";
// import { validateMessages } from '~/features/app/constant/validation'

// i18n
import i18n from "i18next";

// Moment
import moment from "moment";
import "moment/locale/id";

const AppEntryPoint = () => {
  const routes = useRouter();
  // const dispatch = useAppDispatch();
  const { currentLocale } = useApp();

  useEffect(() => {
    console.log(currentLocale);
    moment.locale(currentLocale);
    i18n.changeLanguage(currentLocale);
  }, [currentLocale]);

  return (
    <AntdConfigProvider locale={APP_LANGUAGE_LIST[currentLocale]}>
      <Suspense fallback={"loading..."}>{routes}</Suspense>
    </AntdConfigProvider>
  );
};

export default AppEntryPoint;
