import instance from "../../../service/BaseService";

export const getHomeData = () => {
  return instance.get(
    "/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.2.27&referer=2"
  );
};

export const getVipHomeSchedular = () => {
  return instance.get(
    "/vip/index/getVipHomeSchedular?city_id=0&version=6.2.27&referer=2"
  );
};
