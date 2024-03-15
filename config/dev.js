// NOTE H5 端使用 devServer 实现跨域，需要修改 package.json 的运行命令，加入环境变量
const isH5 = process.env.CLIENT_ENV === "h5";
const HOST = '"https://api.juooo.com/"';

export default {
  logger: {
    quiet: false,
    stats: true,
  },
  mini: {},
  h5: {},
};
