// 防抖函数
export function debounce(fn,delay=500){
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}