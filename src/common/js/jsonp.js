import originJSONP from 'jsonp'

export default function jsonp (url, data, option) {
  url = (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

// 将data里面的数据拼接成 city='guangzho'&name='xiaoli'&sex='boy'这样子的
function param (data) {
  let url = ''
  for (let k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  // 将最前面的&符号去除
  return url ? url.substring(1) : ''
}
