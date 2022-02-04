export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.70,
      when: 'beforeChildren',
      staggerChildren: 0.25
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5
    }
  }
}

export const TitleAnimation = {
  hidden: {
    opacity: 0,
    y: -200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut'
    }
  }
}

export const FadeAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.78,
      ease: 'easeOut'
    }
  }
}

export const ImageAnimation = {
  hidden: {
    x: 500,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: 'easeOut'
    }
  }
}

export const ButtonAnimation = {
  hidden: {
    x: -500,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: 'easeOut'
    }
  }
}

export const ScrollReveal = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.75
    }
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75
    }
  }
}