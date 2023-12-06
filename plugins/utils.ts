import dayjs from "dayjs";

declare module '#app' {
  interface NuxtApp {
    $format (date?: Date, msg?: string): string
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("format", (date?: Date, template?: string) => {
    return dayjs(date).format(template);
  });
});