import { View, Text } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import { useSelectTabStore } from "../../store/index";
import "./index.scss";

export default function Home() {
  const { selectTab } = useSelectTabStore();
  useLoad(() => {
    console.log(selectTab);
  });

  return (
    <View className="HomeWrap">
      <Text>Home</Text>
    </View>
  );
}
