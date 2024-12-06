function main() {
    // 获取<canvas>元素
    var canvas = document.getElementById('example'); // 参数是元素是id

    // 如果getElementById的返回值不为null，代表成功获取元素
    if (!canvas) {
        // 在控制台上显示错误信息
        console.log('Failed to retrieve the <canvas> element'); 
        return;
    }

    // 向该元素请求二维图形的绘图上下文
    var ctx = canvas.getContext('2d');

    if (!ctx) {
        console.log('Failed to apply the context');
        return;
    }

    // 在绘图上下文中调用相应的绘图函数，绘制二维图形
    ctx.fillStyle = 'rgba(0, 0, 255, 1.0)'; // 设置填充颜色为蓝色
    ctx.fillRect(120, 10, 150, 150);        // 使用填充颜色填充矩形：左上角顶点、宽、高
}