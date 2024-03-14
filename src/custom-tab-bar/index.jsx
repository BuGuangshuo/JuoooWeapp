import Taro, { Component } from "@tarojs/taro";
import { CoverView, CoverImage } from "@tarojs/components";
import React, { useState, useEffect } from "react";
// import Intellect from '../assets/intellect.png'
import "./index.scss";

const CustomTabBar = (props) => {
  const [selected, setSelect] = useState(0);
  const [color, setColor] = useState("#666");
  const [selectedColor, setSelectedColor] = useState("#ed6c00");
  const [list, setList] = useState([
    {
      pagePath: "/pages/home/index",
      // iconPath: "/assets/home.png",
      // selectedIconPath: '/assets/home-active.png',
      text: "首页",
    },
    {
      pagePath: "/pages/Theatre/index",
      // iconPath: "/assets/home.png",
      // selectedIconPath: '/assets/home-active.png',
      text: "剧院",
    },
    {
      pagePath: "/pages/Ticket/index",
      // iconPath: "/assets/home.png",
      // selectedIconPath: '/assets/home-active.png',
      text: "票夹",
    },
    {
      pagePath: "/pages/Mine/index",
      // iconPath: "/assets/user.png",
      // selectedIconPath: '/assets/user-active.png',
      text: "我的",
    },
  ]);

  useEffect(() => {
    console.log(props.ind);
    setSelectedColor(props.ind);
  }, []);

  const switchTab = (item) => {
    const url = item.pagePath;
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
              {/* <CoverImage
                className="tab-bar-wrap-item-icon"
                src={selected === index ? item.selectedIconPath : item.iconPath}
              /> */}
              <CoverView
                className="tab-bar-wrap-item-btn"
                style={{
                  color: selected === index ? selectedColor : color,
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
