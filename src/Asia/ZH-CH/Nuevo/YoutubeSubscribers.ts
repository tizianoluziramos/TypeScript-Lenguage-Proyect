import axios from 'axios';

// 定义接口以描述响应数据的结构
interface YouTube频道统计响应 {
  items: Array<{
    statistics: {
      subscriberCount: string;
    };
  }>;
}

export async function 根据ID获取订阅者数量(频道ID: string): Promise<number | null> {
  const apiKey = 'AIzaSyDpTRQ08lIOPoFBbSdGLLMtGfE7W-6mfCs';  // 请替换为您的真实API密钥
  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${频道ID}&key=${apiKey}`;

  try {
    const response = await axios.get<YouTube频道统计响应>(url);
    const 订阅者数量 = response.data.items[0].statistics.subscriberCount;
    return parseInt(订阅者数量);
  } catch (error) {
    console.error("获取订阅者时出错:", error);
    return null;
  }
}