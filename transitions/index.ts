export const animateContainer = {
  hidden: { 
    opacity: 0,
    transition: {
      delayChildren: 1,
      staggerChildren: 2,
    }
  },
  shown: {
    opacity: 1,
    transition: {
      staggerChildren: 2,
    }
  }
}

export const animateItem = {
  removed: {
    display: "none",
    opacity: 0,
  },
  hidden: {
    opacity: 0,
  },
  hiddenWithDelay: {
    opacity: 0,
    transition: {
      delay: 1,
    },
  },
  shown: {
    opacity: 1,
  },
  shownWithDelay: {
    opacity: 1,
    transition: {
       delay: 1,
    },
  }
}
