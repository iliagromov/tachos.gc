  /**
   * Возвращает ширину скроллбара в браузере
   *
   * @return  {number}  ширина скроллбара
   */
export const getScrollbarSize = () => {
    let scrollbarSize = void 0
    if (scrollbarSize === undefined) {
      const scrollDiv = document.createElement('div')
      scrollDiv.style.cssText =
        'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'
      document.body.appendChild(scrollDiv)
      scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth
      document.body.removeChild(scrollDiv)
    }

    return scrollbarSize
  }

/**
   * Переключение скролла на странице с уетом текущего размера скроллбара
   * чтобы не происходило подергивание
   *
   * @param {boolean} isFixed  скролл убран
   */

export const toggleBodyScroll = (isFixed: boolean) => {
    const body = document.body
    const hasScroll = document.body.offsetHeight > window.innerHeight

    if (isFixed) {
      if (hasScroll) {
        const scrollBarSize = getScrollbarSize()
        // body.style.marginRight = scrollBarSize + 'px'
      }
      body.style.overflow = 'hidden'
    } else {
      body.removeAttribute('style')
    }
  }

export const loadingBody = (isLoading: boolean) => {
    const body = document.body
    if(isLoading){
        body.className = 'loading'
    } else {
        body.style.opacity = 'loaded'
    }
   
}