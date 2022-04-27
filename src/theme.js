const colors = {
  primary: '#1FAB3F',
  secondary: '#2F93C4',
  greenLight: '#3BCC5D',
  whiteLight: 'rgba(255, 255, 255, 0.15)',
  gray: '#8D9499',
  grayLight: 'rgba(66, 74, 79, 0.4)',
  dark: '#000005',
  darkLight: '#00000540',
  white: '#FFFFFF',
  black: '#000005',
  grey: '#E5E5E5',
  pink: 'rgba(255, 62, 128, 0.5)',
  blue: 'rgba(65, 62, 255, 0.5)',
  green10: '#D7F7DF',
  green20: '#B0F5C0',
  green30: '#73E58E',
  green40: '#56DB75',
  green50: '#3BCC5D',
  green60: '#1FAB3F',
  green70: '#148C30',
  green80: '#106B25',
  green90: '#105720',
  green100: '#204C2A',
  blue10: '#DCF5FC',
  blue20: '#ABDEF7',
  blue30: '#83C8EB',
  blue40: '#57ADD9',
  blue50: '#2F93C4',
  blue60: '#1178AB',
  blue70: '#035D8A',
  blue80: '#00476B',
  blue90: '#02354F',
  blue100: '#042A3D',
  grey10: '#F5F8FA',
  grey20: '#E8EDF0',
  grey30: '#D5DBE0',
  grey40: '#C2C9CF',
  grey50: '#ADB4BA',
  grey60: '#8D9499',
  grey70: '#656D73',
  grey80: '#424A4F',
  grey90: '#292F33',
  grey100: '#131719',
  red40: '#FF8787',
  red50: '#FA5252',
  red60: '#E03131',
  gray6: 'rgba(0, 0, 0, 0.06)',
  gray12: 'rgba(0, 0, 0, 0.12)',
  gray90: 'rgba(0, 0, 0, 0.9)',
  gray64: 'rgba(0, 0, 0, 0.64)',
  gray50: 'rgba(0, 0, 0, 0.5)',
  gray40: 'rgba(0, 0, 0, 0.4)',
  gray36: 'rgba(0, 0, 0, 0.36)',
  gray28: 'rgba(0, 0, 0, 0.28)',
}

const theme = {
  breakpoints: {
    large: 1440,
    desktop: 1024,
    tablet: 768,
    mobile: 480,
  },
  colors: {
    bg: '#000007',
    primary: '#1FAB3F',
    secondary: '#2F93C4',
    greenLight: '#3BCC5D',
    whiteLight: 'rgba(255, 255, 255, 0.15)',
    gray: '#8D9499',
    grayLight: 'rgba(66, 74, 79, 0.4)',
    dark: '#000005',
    darkLight: '#00000540',
    white: '#FFFFFF',
    black: '#000005',
    grey: '#E5E5E5',
    pink: 'rgba(255, 62, 128, 0.5)',
    blue: 'rgba(65, 62, 255, 0.5)',
    green10: '#D7F7DF',
    green20: '#B0F5C0',
    green30: '#73E58E',
    green40: '#56DB75',
    green50: '#3BCC5D',
    green60: '#1FAB3F',
    green70: '#148C30',
    green80: '#106B25',
    green90: '#105720',
    green100: '#204C2A',
    blue10: '#DCF5FC',
    blue20: '#ABDEF7',
    blue30: '#83C8EB',
    blue40: '#57ADD9',
    blue50: '#2F93C4',
    blue60: '#1178AB',
    blue70: '#035D8A',
    blue80: '#00476B',
    blue90: '#02354F',
    blue100: '#042A3D',
    blue101: '#D4F1FF',
    grey10: '#F5F8FA',
    grey20: '#E8EDF0',
    grey30: '#D5DBE0',
    grey40: '#C2C9CF',
    grey50: '#ADB4BA',
    grey60: '#8D9499',
    grey70: '#656D73',
    grey80: '#424A4F',
    grey90: '#292F33',
    grey100: '#131719',
    red40: '#FF8787',
    red50: '#FA5252',
    red60: '#E03131',
    txDetailBg: '#f0f3f5',
    gray6: 'rgba(0, 0, 0, 0.06)',
    gray12: 'rgba(0, 0, 0, 0.12)',
    gray50: 'rgba(0, 0, 0, 0.5)',
    gray90: 'rgba(0, 0, 0, 0.9)',
    gray64: 'rgba(0, 0, 0, 0.64)',
    gray50: 'rgba(0, 0, 0, 0.5)',
    gray40: 'rgba(0, 0, 0, 0.4)',
    gray36: 'rgba(0, 0, 0, 0.36)',
    gray28: 'rgba(0, 0, 0, 0.28)',
  },
  gradients: {
    primary: 'linear-gradient(180deg, #204C2A 0%, rgba(32, 76, 42, 0) 100%)',
    dark: 'linear-gradient(135deg, #292F33 0%, #131719 100%)',
    light: 'linear-gradient(135deg, #F5F8FA 0%, #E8EDF0 100%)',
    secondary: 'linear-gradient(180deg, #042A3D 0%, rgba(4, 42, 61, 0) 100%)',
    radient1:
      'radial-gradient(50% 50% at 50% 50%, rgba(59, 204, 93, 0.4) 0%, rgba(59, 204, 93, 0) 100%)',
    radient2:
      'radial-gradient(50% 50% at 50% 50%, rgba(0, 196, 255, 0.4) 0%, rgba(0, 196, 255, 0) 100%)',
    radient3:
      'linear-gradient(90deg,#f5f8fa 10.5%,rgba(213, 219, 224, 0) 76.5%);',
    sideBar:
      'linear-gradient(90deg,rgba(254, 255, 254, 0.5) 0%,rgba(250, 253, 252, 0.5) 51%,rgba(238, 246, 243, 0.7) 100%)',
    sideBarHover:
      'linear-gradient(90deg,rgba(255, 255, 255, 1) 0%,rgba(242, 249, 251, 1) 43%,rgba(213, 233, 239, 1) 100%);',
    content:
      'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(251,252,253,1) 53%, rgba(247,250,251,1) 100%)',
    txItemHover:
      'linear-gradient(90deg,rgba(245, 248, 250, 1) 0%,rgba(240, 243, 245, 1) 32%,      rgba(247, 250, 251, 1) 100%);',
    accountBanner: 'linear-gradient(94.54deg, #042a3d 0%, #035d8a 100%)',
    progressbar: 'linear-gradient(90deg, #83C8EB 0%, #2F93C4 100%);',
  },
  contentWrapper: {
    signInFrom: {
      bottomBorder: '1px solid rgba(0, 0, 0, 0.12)',
    },
    width: '480px',
    boxShadow:
      '16px 32px 64px rgba(0, 0, 0, 0.04), 9px 18px 28px rgba(0, 0, 0, 0.05), 4px 8px 10px rgba(0, 0, 0, 0.06),1px 2px 4px rgba(0, 0, 0, 0.1)',
    background: colors.white,
    dropShadow: 'drop-shadow(0px 30px 160px rgba(183, 213, 198, 1))',
  },
  tooltip: {
    default: {
      color: colors.white,
      background: colors.gray36,
      backdropFilter: 'blur(20px)',
    },
    input: {
      color: colors.white,
      background: colors.gray36,
      backdropFilter: 'blur(32px)',
    },
    copyIcon: {
      color: colors.white,
      background: colors.gray36,
      backdropFilter: 'blur(32px)',
    },
  },
  Icon: {
    hover: {
      blue: colors.secondary,
      LightGreyCopy: colors.gray50,
      Copy: colors.secondary,
    },
  },
  tab: {
    default: {
      color: colors.gray64,
      background: 'transparent',
      active: {
        color: colors.gray90,
        background: colors.white,
      },
    },
  },
  textArea: {
    default: {
      color: colors.gray90,
      scrollTrackColor: colors.gray12,
      scrollThumbColor: colors.gray28,
    },
  },
  styledLink: {
    default: {
      color: colors.secondary,
    },
    black: {
      color: colors.black,
    },
    green: {
      color: colors.primary,
    },
    grey: {
      color: colors.gray36,
    },
    heavyGrey: {
      color: colors.gray50,
    },
    follow: {
      color: colors.blue60,
    },
    hover: {
      default: {
        color: colors.secondary,
      },
      black: {
        color: colors.black,
      },
      green: {
        color: colors.primary,
      },
      grey: {
        color: colors.gray36,
      },
      heavyGrey: {
        color: colors.gray90,
      },
      follow: {
        color: colors.blue60,
      },
    },
  },
  button: {
    primary: {
      background: 'linear-gradient(91.29deg, #3BCC5D 0%, #1FAB3F 100%)',
      color: colors.white,
    },
    secondary: {
      background: 'linear-gradient(91.29deg, #2F93C4 0%, #1178AB 100%)',
      color: colors.white,
    },
    default: {
      background: 'linear-gradient(91.29deg, #FFFFFF 0%, #E8EDF0 100%)',
      color: colors.gray64,
    },
    service: {
      color: colors.gray28,
      background: 'transparent',
      fontSize: '16px',
      padding: '8px 12px;',
    },
    favorite: {
      color: colors.gray64,
      background: 'transparent',
      fontSize: '18px',
      padding: '12px 16px;',
    },
    back: {
      color: colors.gray50,
      background: 'transparent',
      fontSize: '16px',
      padding: '6px 12px;',
    },
    cancel: {
      color: colors.gray28,
      background: 'transparent',
      fontSize: '16px',
      padding: '6px 12px;',
    },
    black: {
      color: colors.gray28,
      background: 'transparent',
      fontSize: '18px',
      padding: '6px 12px;',
    },
    hover: {
      primary: {
        background: 'linear-gradient(91.29deg, #1FAB3F 0%, #148C30 100%)',
      },
      secondary: {
        background: 'linear-gradient(91.29deg, #1178AB 0%, #035D8A 100%)',
      },
      default: {
        background: 'linear-gradient(91.29deg, #E8EDF0 0%, #D4D9DC 100%)',
      },
      service: {
        color: colors.gray50,
        background: colors.gray12,
      },
      favorite: {
        color: colors.gray64,
        background: colors.gray12,
      },
      back: {
        color: colors.gray50,
        background: colors.gray12,
      },
      cancel: {
        color: colors.gray50,
        background: colors.gray12,
      },
      black: {
        color: colors.black,
        background: colors.gray6,
      },
    },
    disabled: {
      background: 'linear-gradient(91.29deg, #E8EDF0 0%, #D4D9DC 100%)',
      service: {
        color: colors.gray12,
        background: colors.gray12,
      },
      favorite: {
        color: colors.gray64,
        background: colors.gray12,
      },
      back: {
        color: colors.gray12,
        background: colors.gray12,
      },
      cancel: {
        color: colors.gray12,
        background: colors.gray12,
      },
      black: {
        color: colors.gray12,
        background: colors.gray12,
      },
    },
  },
  slider: {
    default: {
      trackColor: colors.grey20,
      thumbColor: 'linear-gradient(92.89deg, #50B4E6 2.83%, #036A9E 115.72%);',
      circleColor: colors.blue40,
    },
    audioPlayer: {
      trackColor: colors.grey50,
      thumbColor: colors.grey30,
      circleColor: colors.grey50,
    },
  },
  input: {
    default: {
      color: colors.gray50,
      borderBottom: '1px solid ' + colors.gray28,
      background: 'transparent',
      fontSize: '18px',
      padding: '11px 0px 8px 0px',
      hover: {
        color: colors.gray90,
        borderBottom: '1px solid ' + colors.gray50,
      },
      focus: {
        color: colors.gray90,
        labelColor: colors.blue60,
        borderBottom: '1px solid ' + colors.blue40,
      },
      disabled: {
        color: colors.gray28,
        borderBottom: '1px solid ' + colors.gray12,
      },
    },
    grey: {
      color: colors.gray50,
      borderBottom: '1px solid ' + colors.gray28,
      background: 'transparent',
      fontSize: '18px',
      padding: '11px 0px 8px 0px',
      hover: {
        color: colors.gray90,
        borderBottom: '1px solid ' + colors.gray50,
      },
      focus: {
        color: colors.gray90,
        labelColor: colors.blue60,
        borderBottom: '1px solid ' + colors.blue40,
      },
      disabled: {
        color: colors.gray28,
        borderBottom: '1px solid ' + colors.gray12,
      },
    },
    bigGrey: {
      color: colors.gray36,
      borderBottom: '1px solid ' + colors.gray28,
      background: 'transparent',
      fontSize: '24px',
      padding: '11px 0px 2px 0px',
      hover: {
        color: colors.gray90,
        borderBottom: '1px solid ' + colors.gray50,
      },
      focus: {
        color: colors.gray90,
        labelColor: colors.blue60,
        borderBottom: '1px solid ' + colors.blue40,
      },
      disabled: {
        color: colors.gray28,
        borderBottom: '1px solid ' + colors.gray12,
      },
    },
    bigGreySearch: {
      color: colors.gray36,
      borderBottom: '1px solid ' + colors.gray28,
      background: 'transparent',
      fontSize: '24px',
      padding: '11px 0px 2px 0px',
      hover: {
        color: colors.gray90,
        borderBottom: '1px solid ' + colors.gray50,
      },
      focus: {
        color: colors.gray90,
        labelColor: colors.green60,
        borderBottom: '1px solid ' + colors.green50,
      },
      disabled: {
        color: colors.gray28,
        borderBottom: '1px solid ' + colors.gray12,
      },
    },
    eth: {
      color: colors.gray50,
      borderBottom: '1px solid ' + colors.gray28,
      background: 'transparent',
      fontSize: '40px',
      padding: '0px',
      hover: {
        color: colors.gray90,
        borderBottom: '1px solid ' + colors.gray50,
      },
      focus: {
        color: colors.gray90,
        labelColor: colors.blue60,
        borderBottom: '1px solid ' + colors.blue40,
      },
      disabled: {
        color: colors.gray28,
        borderBottom: '1px solid ' + colors.gray12,
      },
    },
  },
  message: {
    input: {
      color: {
        Info: colors.gray50,
        Success: colors.green70,
        Error: colors.red60,
      },
      size: '14px',
    },
  },
  timeline: {
    active: {
      fontSize: '14px',
      color: colors.gray90,
      iconColor: colors.primary,
      lineColor: colors.primary,
      boxShadow: 'none',
    },
    current: {
      fontSize: '18px',
      color: colors.gray90,
      iconColor: colors.primary,
      lineColor: colors.grey40,
      boxShadow: '0px 0px 1px 4px rgba(176, 245, 192, 0.5)',
    },
    inactive: {
      fontSize: '14px',
      color: colors.grey40,
      iconColor: colors.grey40,
      lineColor: colors.grey40,
      boxShadow: 'none',
    },
  },
  shadows: {
    btn: '0px 4px 16px rgba(59, 204, 93, 0.4), 0px 0px 80px rgba(59, 204, 93, 0.5)',
    btnHover:
      '0px 4px 16px rgba(86, 219, 117, 0.5), 0px 0px 80px rgba(86, 219, 117, 0.7)',
    shadow10:
      '2px 4px 10px rgba(0, 0, 0, 0.04), 1px 2px 5px rgba(0, 0, 0, 0.1), 0.5px 1px 2px rgba(0, 0, 0, 0.11)',
    shadow20:
      '16px 32px 64px rgba(0, 0, 0, 0.04), 9px 18px 28px rgba(0, 0, 0, 0.05), 4px 8px 10px rgba(0, 0, 0, 0.06), 1px 2px 4px rgba(0, 0, 0, 0.1)',
    shadow30:
      '20px 40px 72px rgba(0, 0, 0, 0.12), 8px 16px 22px rgba(0, 0, 0, 0.08), 2px 4px 6px rgba(0, 0, 0, 0.05)',
    shadow40:
      '20px 40px 72px rgba(0, 0, 0, 0.12), 14px 28px 48px rgba(0, 0, 0, 0.12), 6px 12px 12px rgba(0, 0, 0, 0.08), 1px 2px 4px rgba(0, 0, 0, 0.05)',
    shadow50:
      '40px 80px 80px -8px rgba(0, 0, 0, 0.08), 24px 48px 64px -5px rgba(0, 0, 0, 0.1), 13px 26px 48px -6px rgba(0, 0, 0, 0.16), 7px 14px 24px -6px rgba(0, 0, 0, 0.2)',
    shadow60:
      '30px 60px 60px -6px rgba(0, 0, 0, 0.12), 16px 32px 48px -5px rgba(0, 0, 0, 0.12), 7px 14px 32px -6px rgba(0, 0, 0, 0.2), 5px 10px 16px -3px rgba(0, 0, 0, 0.24)',
    releaseTypeBoxShadow:
      'drop-shadow(20px 40px 72px rgba(0, 0, 0, 0.12)) drop-shadow(8px 16px 22px rgba(0, 0, 0, 0.08)) drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.05))',
    accountBanner: '15px 13px 41px 0px rgba(170, 171, 171, 0.8)',
    albumHover: '10px 10px 15px 0px rgba(170, 171, 171, 0.6)',
  },
}

export default theme
