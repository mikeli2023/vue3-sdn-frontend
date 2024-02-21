import {
    ElLoading
} from 'element-plus'

let loadingCount = 0;
let loading;

const startLoading = () => {
    loading = ElLoading.service({
        lock: true,
        text: 'loading...',
        background: 'rgba(255, 255, 255, 0.6)'
    });
};

const endLoading = () => {
    loading.close();
};

export const showLoading = () => {
    if (loadingCount === 0) {
        startLoading();
    }
    loadingCount += 1;
};

export const hideLoading = () => {
    if (loadingCount <= 0) {
        return;
    }
    loadingCount -= 1;
    if (loadingCount === 0) {
        endLoading();
    }
}