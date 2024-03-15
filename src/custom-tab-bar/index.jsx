import Taro, { Component } from "@tarojs/taro";
import { CoverView, Text, CoverImage } from "@tarojs/components";
import React, { useState, useEffect } from "react";
import { useSelectTabStore } from "../store/index";
import homeIconSelect from "../assets/icons/tabIconHomeSelected.png";
import homeIcon from "../assets/icons/home.png";
import theatreIcon from "../assets/icons/theatre.png";
import theatreIconSelect from "../assets/icons/theatreActive.png";
import ticketIcon from "../assets/icons/ticket.png";
import ticketSelect from "../assets/icons/ticketActive.png";
import mineIcon from "../assets/icons/mine.png";
import mineIconSelect from "../assets/icons/mineActive.png";

import "./index.scss";

const CustomTabBar = () => {
  const [color, setColor] = useState("#666");
  const [selectedColor, setSelectedColor] = useState("#ed6c00");
  const [list, setList] = useState([
    {
      pagePath: "/pages/home/index",
      iconPath: homeIcon,
      selectedIconPath: homeIconSelect,
      text: "首页",
    },
    {
      pagePath: "/pages/Theatre/index",
      iconPath: theatreIcon,
      selectedIconPath: theatreIconSelect,
      text: "剧院",
    },
    {
      pagePath: "/pages/Ticket/index",
      iconPath: ticketIcon,
      selectedIconPath: ticketSelect,
      text: "票夹",
    },
    {
      pagePath: "/pages/Mine/index",
      iconPath: mineIcon,
      selectedIconPath: mineIconSelect,
      text: "我的",
    },
  ]);

  const { selectTab, setSeletTab } = useSelectTabStore();

  useEffect(() => {
    console.log(selectTab);
  }, [selectTab]);

  const switchTab = (item) => {
    const url = item.pagePath;
    setSeletTab(url);
    Taro.switchTab({
      url,
    });
  };

  // jumpIntellect = () => {
  //   Taro.navigateTo({ url: "/pages/intellect/intellect" });
  // };

  // 自定义 tabBar的页面
  return (
    <CoverView className="tab-bar">
      <CoverView className="tab-bar-wrap">
        {list.map((item, index) => {
          return (
            <CoverView
              className="tab-bar-wrap-item"
              onClick={() => switchTab(item)}
              data-path={item.pagePath}
              key={item.text}
            >
              <CoverImage
                className="tab-bar-wrap-item-icon"
                src={
                  selectTab === item.pagePath
                    ? item.selectedIconPath
                    : item.iconPath
                }
              />
              <CoverView
                className="tab-bar-wrap-item-btn"
                style={{
                  color: selectTab === item.pagePath ? selectedColor : color,
                }}
              >
                {item.text}
              </CoverView>
            </CoverView>
          );
        })}
      </CoverView>
      {/* <CoverImage className='intellect-icon' src={Intellect} onClick={this.jumpIntellect} /> */}
    </CoverView>
  );
};
export default CustomTabBar;
