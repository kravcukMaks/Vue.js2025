export {}

declare module 'vue' {
  interface ComponentCustomProperties {
    $copyToClipboard: (text: string) => void
  }
}
