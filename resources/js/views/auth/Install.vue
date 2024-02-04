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
    showInAppInstallPromotion();
    installButton.setAttribute("hidden", "");
}
onMounted(() => {
  
var _beforeInstallPrompt; 

if ( "onbeforeinstallprompt" in window ) { 
  console.log('aa')
window.addEventListener( "beforeinstallprompt", beforeInstallPrompt ); 
} 

function beforeInstallPrompt( evt ) { 
evt.preventDefault(); _beforeInstallPrompt = evt; 
}
 
    window.addEventListener("beforeinstallprompt", (event) => {
        console.log('e', event)
        event.preventDefault();
        deferredPrompt.value = event;
        buttonCss.value = true
        // installButton.removeAttribute("hidden");
    });
    if ( window.addToHomescreen ) { 
      ath = addToHomescreen( { 
      onCanInstall: function ( platform, _instance ) { 
      //run any on screen prompting logic from here 
      console.log('aaa', _instance)
      },
      onBeforeInstallPrompt: function ( platform ) { 
      //this triggers in response to the browser triggering the beforeInstallPrompt event 
      console.log( "native prompt: ", platform ); 
      }
      } ); 
      }
});
</script>