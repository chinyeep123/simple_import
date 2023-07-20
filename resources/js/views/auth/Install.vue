<template>
  <div>
    <el-button
      class="add-button"
      id="install"
      v-if="buttonCss"
      @click="butonClick"
    >
      Install App
    </el-button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const deferredPrompt = ref(null)
const buttonCss = ref(false)
const butonClick = async () => {
    if (!deferredPrompt.value) {
        return;
    }
    const result = await deferredPrompt.value.prompt();
    console.log(`Install prompt was: ${result.outcome}`);
    deferredPrompt.value = null;
    installButton.setAttribute("hidden", "");
}
onMounted(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
        event.preventDefault();
        deferredPrompt.value = event;
        buttonCss.value = true
        // installButton.removeAttribute("hidden");
    });
});
</script>