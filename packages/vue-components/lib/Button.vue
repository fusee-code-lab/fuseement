<template>
  <div :ref="elDom"></div>
</template>

<script lang="ts">
import {
  defineComponent,
  watch,
  PropType,
  onMounted,
  ref,
  onUnmounted,
} from "vue";
import * as fuseement from "@fuseement/client-components";

export default defineComponent({
  name: "FuseementButton",
  props: {
    primary: Boolean,
    backgroundColor: String,
    size: String as PropType<"medium" | "medium" | "large">,
    label: String,
  },
  setup: (props) => {
    const el = ref<HTMLDivElement | null>(null);
    const elDom = (element: HTMLElement) => {
      el.value = element as HTMLDivElement;
    };

    let button: fuseement.Button | undefined = undefined;

    onMounted(() => {
      if (!el.value) return;

      const btn = new fuseement.Button({
        target: el.value,
        props: props,
      });
      button = btn;
    });

    onUnmounted(() => {
      button?.$destroy();
    });

    watch(
      () => props,
      () => {
        button?.$set(props);
      }
    );

    return { elDom };
  },
});
</script>
