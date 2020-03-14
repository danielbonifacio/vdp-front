export const isMobile = () => {
  if (process.client) {
    return window.innerWidth <= 480
  }
}

export const isTablet = () => {
  if (process.client) {
    return window.innerWidth <= 768
  }
}

export const isNotebook = () => {
  if (process.client) {
    return window.innerWidth <= 1110
  }
}

export const isDesktop = () => {
  if (process.client) {
    return window.innerWidth > 1110
  }
}
