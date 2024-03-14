import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Mine() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="MineWrap">
      <Text>Mine</Text>
    </View>
  );
}
