import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useEffect } from "react";
import { setLoading } from "./store/themeConfigSlice";
import { useDispatch } from "react-redux";
import liff from "@line/liff";

async function initLiff() {
  await liff.init({
    liffId: import.meta.env.VITE_LIFF_ID,
  });

  if (!liff.isLoggedIn()) {
    liff.login();
  }
}
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true))
    initLiff()
      .then((profile) => {
        console.log("LINE profile:", profile);
      })
      .finally(() => {
        dispatch(setLoading(false))
      });
  }, []);

  return <RouterProvider router={router} />
}

export default App;
