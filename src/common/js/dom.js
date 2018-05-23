export function addClass (el, className) {
  if (hasClass(el, className)) {
    return
  }
  // 要确保添加的类名前后都有空格，所以需要先拆，再进行组合
  let newClassName = el.className.split(' ')
  newClassName.push(className)
  el.className = newClassName.join(' ')
}
export function hasClass (el, className) {
  let reg = new RegExp('(^|//s)' + className + '(//s|$)')

  return reg.test(el.className)
}
