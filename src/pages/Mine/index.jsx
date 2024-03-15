import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { useSelectTabStore } from "../../store/index";
import "./index.scss";

export default function Mine() {
  const { selectTab } = useSelectTabStore();
  useLoad(() => {
    console.log(selectTab);
  });

  return (
    <View className="MineWrap">
      <Text>Mine</Text>
    </View>
  );
}
