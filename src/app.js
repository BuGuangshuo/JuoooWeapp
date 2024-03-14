import { useLaunch } from "@tarojs/taro";
import { SelectTabStoreProvider } from "./store/index";

import "./app.scss";
import "taro-ui/dist/style/index.scss";

function App({ children }) {
  useLaunch(() => {
    console.log("App launched.");
  });

  // children 是将要会渲染的页面
  return <SelectTabStoreProvider>{children}</SelectTabStoreProvider>;
}

export default App;
