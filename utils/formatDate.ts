export function formatDate(dateStr) {
  var date = new Date(dateStr)
  var day = date.getDate()
  var month = date.getMonth() + 1
  var year = date.getFullYear()

  var formattedDate =
    (day < 10 ? "0" : "") + day + "/" + (month < 10 ? "0" : "") + month + "/" + year

  return formattedDate
}
