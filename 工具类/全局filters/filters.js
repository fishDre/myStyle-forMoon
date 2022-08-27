/* eslint-disable eqeqeq */
const filters = {
  // 过滤日期格式
  formatDate(value, fmt) {
    // 针对ios日期展示NaN-aN-aN问题,正则替换'-'为'/'
    value = !value ? value : value.toString().replace(/-/g, '/');
    const getDate = !value ? new Date() : new Date(value);
    const o = {
      'M+': getDate.getMonth() + 1,
      'd+': getDate.getDate(),
      'h+': getDate.getHours(),
      'm+': getDate.getMinutes(),
      's+': getDate.getSeconds(),
      'q+': Math.floor((getDate.getMonth() + 3) / 3),
      S: getDate.getMilliseconds(),
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        `${getDate.getFullYear()}`.substr(4 - RegExp.$1.length)
      );
    }
    for (const k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length)
        );
      }
    }
    return fmt;
  },
  // 字典转换
  dicValue(value, dicTypeOptions) {
    if (dicTypeOptions.find((item) => item.cddValue == value) != undefined) {
      return dicTypeOptions.find((item) => item.cddValue == value).cddName;
    }
    return '其他';
  },
  // 是/否
  isYes(value) {
    return value == 1 ? '是' : '否';
  },
  // 处理百分号
  renderContent(value) {
    if (value != undefined && value != null) {
      const scale = `${(value * 100.0).toFixed(2)}%`;
      return scale;
    }
    return '-';
  },
};

export default (Vue) => {
  Object.keys(filters).forEach((key) => {
    Vue.filter(key, filters[key]);
  });
};
