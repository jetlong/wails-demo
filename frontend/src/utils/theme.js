export const setThemeColor = function (color) {
    const el = document.documentElement;
    const body = document.querySelector("body");
    // const nprogress = document.querySelector("#nprogress .bar");
    // console.log(nprogress)
    el.style.setProperty("--el-color-primary", color);
    body.style.setProperty("--van-primary-color", color);
    // nprogress.style.setProperty("background", color);
    // 此行判断是否为白天/暗夜模式，可根据自身业务调整代码
    // let mixColor = Store.state.settings.sideTheme.split("-")[1] === "light" ? "#ffffff" : "#000000";
    let mixColor = 'light' === "light" ? "#ffffff" : "#000000";
    // 此行判断是否为白天/暗夜模式，可根据自身业务调整代码
    for (let i = 1; i < 10; i++) {
        el.style.setProperty(`--el-color-primary-light-${i}`, colourBlend(color, mixColor, i / 10));
        el.style.setProperty(`--el-color-primary-dark-${i}`, colourBlend(color, mixColor, i / 10));
    }
    el.style.setProperty(`--el-color-primary-dark-2`, colourBlend(color, mixColor, 0.2));

}

export const colourBlend = function (c1, c2, ratio) {
    ratio = Math.max(Math.min(Number(ratio), 1), 0)
    let r1 = parseInt(c1.substring(1, 3), 16)
    let g1 = parseInt(c1.substring(3, 5), 16)
    let b1 = parseInt(c1.substring(5, 7), 16)
    let r2 = parseInt(c2.substring(1, 3), 16)
    let g2 = parseInt(c2.substring(3, 5), 16)
    let b2 = parseInt(c2.substring(5, 7), 16)
    let r = Math.round(r1 * (1 - ratio) + r2 * ratio)
    let g = Math.round(g1 * (1 - ratio) + g2 * ratio)
    let b = Math.round(b1 * (1 - ratio) + b2 * ratio)
    r = ('0' + (r || 0).toString(16)).slice(-2)
    g = ('0' + (g || 0).toString(16)).slice(-2)
    b = ('0' + (b || 0).toString(16)).slice(-2)
    return '#' + r + g + b
}