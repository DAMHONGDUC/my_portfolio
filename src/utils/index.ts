import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const openURLInNewTab = (url: string) => {
  if (!url) return

  window.open(url, '_blank')
}

export const handleCopyToClipboard = (content: string) => {
  if (!content) return

  navigator.clipboard.writeText(content)
  toast('Copied !!!')
}
