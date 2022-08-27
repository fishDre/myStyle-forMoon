export function formatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}
export function dateFormat (date, fmt) {
  let ret;
  const opt = {
    "y+": date.getFullYear().toString(),        // ��
    "M+": (date.getMonth() + 1).toString(),     // ��
    "d+": date.getDate().toString(),            // ��
    "H+": date.getHours().toString(),           // ʱ
    "m+": date.getMinutes().toString(),         // ��
    "s+": date.getSeconds().toString()          // ��
    // ��������ʽ���ַ�������Լ�����ӣ�����ת�����ַ���
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    }
  }
  return fmt;
}
function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}
