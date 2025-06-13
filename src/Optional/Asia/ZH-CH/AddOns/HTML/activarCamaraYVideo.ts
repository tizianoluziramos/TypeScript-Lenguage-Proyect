// 函数用于启动相机访问
async function 启动相机和视频() {
    try {
        // 请求访问相机
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        // 从流中获取第一条视频轨道
        const pistaDeVideo = stream.getVideoTracks()[0];

        console.log('视频轨道:', pistaDeVideo);

        // 显示视频轨道的信息
        console.log('轨道ID:', pistaDeVideo.id);
        console.log('轨道标签:', pistaDeVideo.label);
        console.log('轨道是否启用?', pistaDeVideo.enabled);
        
        // 在 <video> 元素中显示视频
        const videoElement = document.querySelector('video');
        if (videoElement) {
            videoElement.srcObject = stream;
            videoElement.play();
        }

    } catch (error) {
        console.error('访问相机时出错:', error);
    }
}
