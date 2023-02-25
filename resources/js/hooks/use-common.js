//Copy Clipboard
import useClipboard from "vue-clipboard3";
import { ElMessage } from "element-plus";

// i18n language  match title
import { i18n } from "@/lang";
// the keys using  zh file
import langEn from "@/lang/en";
import settings from "@/settings";

export const sleepTimeout = (time) => {
    return new Promise((resolve) => {
        const timer = setTimeout(() => {
            clearTimeout(timer);
            resolve(null);
        }, time);
    });
};

//Deep clone
export function cloneDeep(value) {
    return JSON.parse(JSON.stringify(value));
}

//copyValueToClipboard
const { toClipboard } = useClipboard();
export const copyValueToClipboard = (value) => {
    toClipboard(JSON.stringify(value));
    ElMessage.success(langTitle("copied_success"));
};
const { t, te } = i18n.global;
export const langTitle = (title) => {
    if (!title) {
        return settings.title;
    }
    for (const key of Object.keys(langEn)) {
        if (te(`${key}.${title}`) && t(`${key}.${title}`)) {
            return t(`${key}.${title}`);
        }
    }

    return title;
};

//get i18n instance
export const getLangInstance = () => {
    return i18n.global;
};
