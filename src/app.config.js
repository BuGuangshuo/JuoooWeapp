import { useGlobalIconFont } from './components/iconfont/helper';

export default defineAppConfig({
  pages: [
    "pages/home/index",
    "pages/Theatre/index",
    "pages/Ticket/index",
    "pages/Mine/index",
  ],
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
      },
      {
        pagePath: "pages/Theatre/index",
        text: "剧院",
      },
      {
        pagePath: "pages/Ticket/index",
        text: "票夹",
      },
      {
        pagePath: "pages/Mine/index",
        text: "我的",
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  usingComponents: Object.assign(useGlobalIconFont()),
}
);
