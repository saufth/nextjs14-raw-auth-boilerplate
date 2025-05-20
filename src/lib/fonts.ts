import localFont from 'next/font/local'

export const fontHeader = localFont({
  src: [
    {
      path: '../assets/fonts/satoshi/Satoshi-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../assets/fonts/satoshi/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/satoshi/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/fonts/satoshi/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../assets/fonts/satoshi/Satoshi-Black.woff2',
      weight: '900',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-sans'
})

export const fontSans = localFont({
  src: [
    {
      path: '../assets/fonts/onest/Onest-Thin.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../assets/fonts/onest/Onest-ExtraLight.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../assets/fonts/onest/Onest-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../assets/fonts/onest/Onest-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/onest/Onest-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/fonts/onest/Onest-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../assets/fonts/onest/Onest-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../assets/fonts/onest/Onest-ExtraBold.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../assets/fonts/onest/Onest-Black.woff2',
      weight: '900',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-header'
})
