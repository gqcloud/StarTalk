export function getFileContent(file: any) {
  let url = null
  if (window.URL !== undefined) {
    url = window.URL.createObjectURL(file)
  } else if (window.webkitURL !== undefined) {
    url = window.webkitURL.createObjectURL(file)
  }
  return url
}
