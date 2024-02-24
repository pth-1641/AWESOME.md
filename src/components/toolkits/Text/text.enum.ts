export enum ETextTag {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
}

export enum ETextStyle {
  NORMAL = 'normal',
  ITALIC = 'italic',
  STRIKE = 'strike',
}

export enum ETextProvider {
  TEXT = 'text',
  TYPING = 'typing',
  CAPSULE = 'capsule',
}

export enum ECapsuleType {
  WAVE = 'wave',
  EGG = 'egg',
  SHARK = 'shark',
  SLICE = 'slice',
  RECT = 'rect',
  SOFT = 'soft',
  ROUNDED = 'rounded',
  CYLINDER = 'cylinder',
  WAVING = 'waving',
  VENOM = 'venom',
  TRANSPARENT = 'transparent',
}

export enum ECapsuleBackgroundType {
  AUTO = 'auto',
  TIME_AUTO = 'timeAuto',
  RANDOM = 'random',
  GRADIENT = 'gradient',
  TIME_GRADIENT = 'timeGradient',
  CUSTOM_COLOR = 'custom_color',
  CUSTOM_GRADIENT = 'custom_gradient',
}

export enum ECapsuleSection {
  HEADER = 'header',
  FOOTER = 'footer',
}

export enum ECapsuleTheme {
  DEFAULT = 'default',
  DARK = 'dark',
  RADICAL = 'radical',
  MERKO = 'merko',
  GRUVBOX = 'gruvbox',
  GRUVBOX_LIGHT = 'gruvbox_light',
  TOKYONIGHT = 'tokyonight',
  ONEDARK = 'onedark',
  COBALT = 'cobalt',
}

export enum ECapsuleAnimation {
  NONE = 'none',
  FADE_IN = 'fadeIn',
  BLINK = 'blink',
  SCALE_IN = 'scaleIn',
  BLINKING = 'blinking',
  TWINKLING = 'twinkling',
}
