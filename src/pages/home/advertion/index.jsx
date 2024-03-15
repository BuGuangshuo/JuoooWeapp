import { View, Text, CoverImage, Swiper, SwiperItem } from "@tarojs/components";
import { useEffect } from "react";

import VipIcon from "../../../assets/icons/vipIcon.png";

import "../index.scss";

export default function Advertion(props) {
  const { homeInfo, vipInfo } = props;
  useEffect(() => {
    console.log(vipInfo);
  }, [homeInfo]);

  return (
    <View>
      <View className="home-advertion-wrap-label">
        {homeInfo.classify_list?.map((item) => (
          <View className="home-advertion-wrap-label-item" key={item.id}>
            <View className="home-advertion-wrap-label-item-column">
              <CoverImage
                src={item.pic}
                className="home-advertion-wrap-label-item-column-icon"
              />
              <Text className="home-advertion-wrap-label-item-column-title">
                {item.name}
              </Text>
            </View>
          </View>
        ))}
      </View>
      <View className="home-advertion-wrap-vip-ahead">
        <View className="home-advertion-wrap-vip-ahead-advert">
          <View className="home-advertion-wrap-vip-ahead-advert-left">
            <CoverImage
              src={VipIcon}
              className="home-advertion-wrap-vip-ahead-advert-left-icon"
            />
            <Text>会员优先购票</Text>
          </View>

          <View className="home-advertion-wrap-vip-ahead-advert-right">
            <Text>99元/年</Text>
            <Text> > </Text>
          </View>
        </View>

        <View className="home-advertion-wrap-vip-ahead-swiper">
          <Swiper
            indicatorColor="rgba(255, 255, 255, 0.3)"
            indicatorActiveColor="#fff"
            circular
            indicatorDots
            autoplay
          >
            {vipInfo.allList &&
              vipInfo.allList.map((item) => (
                <SwiperItem
                  className="home-advertion-wrap-vip-ahead-swiper-item"
                  key={item.image_url}
                >
                  <View className="home-advertion-wrap-vip-ahead-swiper-list">
                    <View className="list-left">
                      <CoverImage src={item.pic} className="list-left-img" />
                    </View>
                    <View className="list-right">
                      <Text>{item.schedular_name}</Text>
                      <Text className="list-right-tip">
                        <Text className="list-right-tip-time">
                          {item.pre_time}
                        </Text>
                        <Text>开始</Text>
                      </Text>
                    </View>
                  </View>
                </SwiperItem>
              ))}
          </Swiper>
        </View>
      </View>
    </View>
  );
}
