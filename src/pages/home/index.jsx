import { View, Text } from "@tarojs/components";
import React, { useState } from "react";
import Taro, { useLoad } from "@tarojs/taro";
import { useSelectTabStore } from "../../store/index";
import axios from "axios";
import { getHomeData, getVipHomeSchedular } from "./service/HomeService";
import "./index.scss";
import TopBar from "./topBar";
import HomeSwiper from "./swiper";
import Advertion from "./advertion";

export default function Home() {
  const { selectTab } = useSelectTabStore();

  const [homeInfo, setHomeInfo] = useState([]);
  const [vipInfo, setVipInfo] = useState([]);

  useLoad(() => {
    const getHome = async () => {
      const homeRes = await getHomeData();
      const vipRes = await getVipHomeSchedular();
      setHomeInfo(homeRes.data);
      setVipInfo(vipRes.data);
    };
    getHome();
  });

  return (
    <View className="home">
      {/* <Text>Home</Text> */}
      <TopBar homeInfo={homeInfo} />
      <View className="home-main">
        <View className="home-branner-wrap">
          <HomeSwiper homeInfo={homeInfo} />
        </View>
        <View className="home-advertion-wrap">
          <Advertion homeInfo={homeInfo} vipInfo={vipInfo} />
        </View>
      </View>
    </View>
  );
}
