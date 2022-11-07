import axios from "axios";
import axiosRetry from "axios-retry";

const request = axios.create({
    timeout: 30*1000,
})
axiosRetry(request, {//传入axios实例
    retries: 5,              // 设置自动发送请求次数
    retryDelay: (retryCount: number) => {
        return retryCount * 1500;      // 重复请求延迟（毫秒）
    },
    shouldResetTimeout: true,       //  重置超时时间
    retryCondition: () => {
        return true
    }
});

export default request
