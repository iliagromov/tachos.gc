import React from "react";
import cn from "classnames";
import { HeaderComponent } from "../../components/common/Header/Header";
import { FooterComponent } from "../../components/common/Footer/Footer";
// import { DebugGridComponent } from "../../components/common/DebugGrid/DebugGrid";

// import { PreloaderComponent } from "../../components/common/Preloader/Preloader";
// import { loadingBody, toggleBodyScroll } from "../../shared/utils";
// import Lottie from "react-lottie";
// import animationData from "../../lotties/video-preloader.json";

import { CookiesComponent } from "../../components/common/Cookies/Cookies";
import { ModalComponent } from "../../components/common/Modal/Modal";
import { Form } from "../../components/common/Form/Form";

const Layout = ({ children }) => {
  // const [loading, setLoading] = useState(false);
  // const [isLoaded, setLoaded] = useState(true);
  // const [isComplite, setComplite] = useState(false);

  // сначала scale
  // потом включаю контент

  // useEffect(() => {
  //   // загружается...
  //   setLoading(true);
  //   // блокирую скролл
  //   toggleBodyScroll(true);

  //   setTimeout(() => {
  //     // показываю контент
  //     setLoaded(true);
  //   }, 1000);

  //   setTimeout(() => {
  //     toggleBodyScroll(false);
  //     setLoading(false);
  //   }, 1900);

  //   setTimeout(() => {
  //     setComplite(true);
  //   }, 2500);
  // }, []);

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <>
      {/* {!isComplite && <div className={cn("preloader", !loading && 'preloaderLoaded')}>
       <Lottie options={defaultOptions} isStopped={!loading} />
      </div>
      }   */}
      <div className={cn("page-body contentLoaded")}>
        <HeaderComponent />
        <main className="page">{children}</main>
        <FooterComponent />
      </div>
      <ModalComponent />
      <CookiesComponent />
      <div className="b24">
        <Form />
      </div>
    </>
  );
};

export default Layout;
