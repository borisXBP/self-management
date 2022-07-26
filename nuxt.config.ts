import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false, // 开启接管模式后，可以关闭生成垫片文件
  },
});

/*
如何启用接管模式？
 将 Volar 更新到 0.27.17。
禁用内置 TypeScript 扩展：
2.1。运行Extensions: Show Built-in Extensions命令
2.2。查找TypeScript and JavaScript Language Features，右键单击并选择Disable (Workspace)
重新加载 VSCode，然后打开任意vue文件触发Volar激活（在 0.28.4 中不再需要）。

如何禁用接管模式？
运行Extensions: Show Built-in Extensions命令
查找TypeScript and JavaScript Language Features，右键单击并选择Enable (Workspace)
重新加载 VSCode 
*/
