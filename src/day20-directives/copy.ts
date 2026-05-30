/*
 * @Description:
  作用：点击元素后复制指定文本。
 * @Author: zhaoyang.sun@proinnova.com.cn
 * @Date: 2026-05-30 16:42:42
 */
import type { Directive } from "vue";

/**
 * TypeScript 问题：HTMLElement 默认没有 _copyHandler 这个属性，
 * 所以要给元素扩展类型。
 */
type CopyElement = HTMLElement & {
  _copyHandler?: () => void;
  _copyValue?: string;
};

export const vCopy: Directive<CopyElement, string> = {
  mounted(el, binding) {
    el._copyValue = binding.value;

    const handleClick = async () => {
      // 作用是：复制失败时不会让程序直接报错中断，而是输出失败原因。
      try {
        /**
       * navigator：浏览器提供的全局对象，代表当前浏览器环境
       * navigator.clipboard 是浏览器提供的剪贴板 API。
       *    它用来读写系统剪贴板，比如复制文本、读取文本。
       * writeText 是剪贴板对象上的一个方法，用来把文本写入剪贴板。
       * 
       * 需要注意两点：
          通常要在用户主动操作里触发，比如点击按钮。
          一般要求页面运行在 https 或 localhost，普通 http 可能不能用。
       */

        // 这里的 binding.value 是 mounted 当时闭包里保存的值。如果后面 v-copy 的值变了，点击时不一定拿到最新值
        // await navigator.clipboard.writeText(binding.value);

        await navigator.clipboard.writeText(el._copyValue ?? "");
        console.log("复制成功：", el._copyValue);
      } catch (error) {
        console.error("复制失败：", error);
      }
    };

    el.addEventListener("click", handleClick);

    // 保存函数引用。
    el._copyHandler = handleClick;
  },

  // 加 updated，让复制内容变化时也能拿到新值
  updated(el, binding) {
    el._copyValue = binding.value;
  },

  // 作用是：组件卸载时移除点击事件，避免重复绑定和内存泄漏。
  unmounted(el) {
    if (el._copyHandler) {
      el.removeEventListener("click", el._copyHandler);
    }
  },
};
