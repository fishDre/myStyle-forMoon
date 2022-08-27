export default {
  NumberTranslate: {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
  },
  DateTypeTranslate: {
    d: '日',
    w: '周',
    1: '月',
    2: '期',
    y: '年',
  },
  /**
     * 序列化日期
     * @param {Date} date
     * @param {String} fmt
     */
  formatDate(date, fmt) {
    const o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': date.getMonth() + 1, // 期
      'w+': this.getMonthWeek(date), // 当月第几周
      S: date.getMilliseconds(), // 毫秒
    };
    let fmtTemp = fmt;
    if (/(y+)/.test(fmtTemp)) {
      fmtTemp = fmtTemp.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
    }
    Object.keys(o).forEach((k) => {
      if (new RegExp(`(${k})`).test(fmtTemp)) {
        fmtTemp = fmtTemp.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`)
          .substr((`${o[k]}`).length)));
      }
    });
    return fmtTemp;
  },
  /**
     * 获取当月的周数
     * @param {Date} date
     */
  getMonthWeek(date) {
    // Todo  weeK转换待完成！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！最后根据需求来
    // date.setDate(date.getDate() + (7 - date.getDay() - 1));
    const w = date.getDay();
    const d = date.getDate();
    return Math.ceil((d + 6 - w) / 7);
  },
  /**
     * 将传入的【年月日周季】转换成【日期】yyy-MM-dd
     * @param {String} date
     */
  dateTranslate(date) {
    let dateString = '';
    let curDateName = '';
    if (date.indexOf('-') !== -1) { // 日
      dateString = date;
      curDateName = '日';
    } else if (date.length === 6) { // 月
      dateString = `${date.substr(0, 4)}-${date.substr(4, 2)}-01`;
      curDateName = '月';
    } else if (date.indexOf('周') !== -1) { // 周
      const year = date.substr(0, 4);
      const month = date.substr(4, 2);
      const week = date.substr(7, 1);
      // 获取当月一号对应的星期;
      const firstDayWeekOfMonth = new Date(`${year}-${month}-01`).getDay();
      // 获取当月天数
      const maxDayOfMonth = new Date(year, month, 0).getDate();
      let day = week * 7 - firstDayWeekOfMonth;
      if (day < 10) {
        if (day <= 0) {
          day = 1;
        }
        day = `0${day}`;
      } else if (day > maxDayOfMonth) {
        // 超出最大值，取最大
        day = maxDayOfMonth;
      }
      dateString = `${year}-${month}-${day}`;
      curDateName = '周';
    } else if (date.indexOf('期') !== -1) { // 季
      const quary = this.NumberTranslate[date.substr(6, 1)];
      // const month = quary * 3 > 10 ? quary * 3 : `0${quary * 3}`;
      dateString = `${date.substr(0, 4)}-${quary}-01`;
      curDateName = '期';
    } else if (date.indexOf('季度') !== -1) { // 季
      const quary = this.NumberTranslate[date[5]];
      // const month = quary * 3 > 10 ? quary * 3 : `0${quary * 3}`;
      // console.error("------------456------------",date)
      dateString = `${date.substr(0, 4)}-${quary}-01`;
      curDateName = '季';
    } else if (date.length === 4) { // 年
      dateString = `${date}-01-01`;
      curDateName = '年';
    }
    return {
      dateName: curDateName,
      date: dateString,
    };
  },
  /**
     * 将字符串日期类型转换成数组
     * @param {String} dateString
     */
  dateTypeList(dateString) {
    if (dateString) {
      return dateString.split(',').map(it => this.DateTypeTranslate[it]);
    }
    return [];
  },
  // 序列化请求参数到url
  serialize(obj) {
    const str = [];
    Object.keys(obj).forEach((key) => {
      let value = obj[key];
      if (typeof (value) === 'object') {
        value = encodeURIComponent(JSON.stringify(obj[key]));
      } else {
        value = encodeURIComponent(value);
      }
      str.push(`${encodeURIComponent(key)}=${value}`);
    });
    return str.join('&');
  },
  // 数组分组
  groupBy(array, f) {
    const groups = {};
    array.forEach((o) => {
      const group = JSON.stringify(f(o));
      groups[group] = groups[group] || [];
      groups[group].push(o);
    });
    return Object.keys(groups).map(group => groups[group]);
  },
  // 深度拷贝
  deepClone(obj) {
    const objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === 'object') {
      /* eslint-disable */
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            // 判断ojb子元素是否为对象，如果是，递归复制
            if (obj[key] && typeof obj[key] === 'object') {
              objClone[key] = this.deepClone(obj[key]);
            } else {
              // 如果不是，简单复制
              objClone[key] = obj[key];
            }
          }
        }
      }
      return objClone;
    },
  };
  