import { View, Text, CoverImage } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import { useEffect } from "react";

import calander from "../../../assets/icons/calander.png";
import location from "../../../assets/icons/location.png";

import "../index.scss";
import { AtSearchBar } from "taro-ui";

export default function TopBar(props) {
  const { homeInfo } = props;
  useEffect(() => {
    console.log(homeInfo);
  }, [homeInfo]);

  return (
    <View className="home-top-bar">
      <View className="home-top-bar-loaction">
        <CoverImage src={location} className="home-top-bar-loaction-icon" />
        <Text className="home-top-bar-loaction-title">全国</Text>
      </View>
      <View className="home-top-bar-search">
        <AtSearchBar placeholder="搜索热门演出" />
      </View>
      <View className="home-top-bar-calander">
        <CoverImage src={calander} />
      </View>
    </View>
  );
}
