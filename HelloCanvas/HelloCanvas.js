/**
* 三个步骤：获取<canvas>元素、获取绘图上下文、开始绘图
*/

function main() {
    // 通过id获取<canvas>元素
    var canvas = document.getElementById('webgl');

    if (!canvas) {
        // 在控制台上显示错误信息
        console.log('Failed to retrieve the <canvas> element'); 
        return;
    }

    // 获取WebGL绘图上下文
    var gl = getWebGLContext(canvas);
    if (!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return;
    }

    // 指定用来清空<canvas>的颜色
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // RGBA

    // 清空绘图区（清空之前需要指定背景颜色）
    gl.clear(gl.COLOR_BUFFER_BIT);
}



