function sum(a, b) {
  return a + b
}

function formatDate(date) {
  
  // UTC 时间 不是本地时间。所以在东八区（中国、日本）凌晨时：可能会少一天
  // return date.Intl.DateTimeFormat.slice(0, 10)

  const formatter = Intl.DateTimeFormat('zh-CN')
  return formatter.format(date)
}

console.log('sum:', sum(10, 20))
console.log('today:', formatDate(new Date()))
