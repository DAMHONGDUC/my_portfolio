export const openURLInNewTab = (url: string) => {
  if (!url) return

  window.open(url, '_blank')
}
