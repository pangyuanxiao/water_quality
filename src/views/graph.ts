import { Chart } from '@antv/g2';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function demo(){
// 准备数据
const data = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
  ];
  
  // 初始化图表实例
  const chart = new Chart({
    container: 'container',
    theme: 'classic',
  });
  
  // 声明可视化
  chart
    .interval() // 创建一个 Interval 标记
    .data(data) // 绑定数据
    .encode('x', 'genre') // 编码 x 通道
    .encode('y', 'sold'); // 编码 y 通道
  
  // 渲染可视化
  chart.render();
}
export function line():void{
  const chart = new Chart({
    container: 'container',
    theme: 'classic',
    autoFit: true,
  });
  
  chart
    .line()
    .data({
      type: 'fetch',
      value:
        'http://localhost:3000/ph',
      format: 'csv',
    })
    .encode('x', 'record_date')
    .encode('y', 'silicate')
    .axis('x',{
      tick:false,
      label:false,
    });
  
  chart.render();
}