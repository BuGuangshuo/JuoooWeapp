import { View, Swiper, SwiperItem, CoverImage } from "@tarojs/components";
import { useEffect } from "react";

import "../index.scss";

export default function HomeSwiper(props) {
  const { homeInfo } = props;
  useEffect(() => {
    console.log(homeInfo);
  }, [homeInfo]);

  return (
    <Swiper
      indicatorColor="rgba(255, 255, 255, 0.3)"
      indicatorActiveColor="#fff"
      circular
      indicatorDots
      autoplay
    >
      {homeInfo.slide_list &&
        homeInfo.slide_list.map((item) => (
          <SwiperItem
            className="home-branner-wrap-swiperItem"
            key={item.image_url}
          >
            <View className="demo-text-1">
              <CoverImage src={item.image_url} />
            </View>
          </SwiperItem>
        ))}
    </Swiper>
  );
}
