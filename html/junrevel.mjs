

const MojiPaths = {}
for (const moji in MojiPathStrs){
    const d = MojiPathStrs[moji];
    const path = new Path2D(d);
    MojiPaths[moji] = path;
}

const prefectures = `北海道,349,16,135,80,47,33,h
青森,369,108,115,33,45,10,h
秋田,369,141,62,37,17,12,h
山形,369,178,54,37,13,12,h
岩手,431,141,53,37,13,12,h
宫城,423,178,61,37,16,12,h
滋贺,260,343,24,52,5,11,v
石川,260,215,24,77,5,26,v
福井,260,292,24,51,5,12,v
冲绳,16,448,21,36,4,4,v
京都,214,304,46,91,9,40,h
兵库,185,304,29,91,7,33,v
鸟取,161,304,24,40,5,6,v
岛根,134,304,27,40,7,6,v
冈山,161,344,24,51,5,11,v
广岛,134,344,27,51,7,11,v
山口,111,304,23,91,5,33,v
和歌山,196,450,64,23,11,5,h
奈良,233,395,27,55,6,14,v
大阪,196,395,37,55,11,14,v
三重,260,395,24,78,5,24,v
高知,111,461,74,23,24,5,h
香川,146,406,39,23,6,5,h
爱媛,111,406,35,55,11,14,v
德岛,146,429,39,32,6,9,h
长崎,16,375,23,43,4,8,v
福冈,48,346,26,50,6,12,v
佐贺,16,346,32,29,2,8,h
熊本,48,396,26,58,6,17,v
鹿儿岛,48,454,52,30,5,8,h
大分,74,346,26,59,6,16,v
宫崎,74,405,26,49,6,11,v
富山,284,215,35,63,10,18,v
群马,349,262,53,47,13,17,h
栃木,402,262,48,47,10,17,h
琦玉,349,309,101,31,37,8,h
长野,319,262,30,133,8,54,v
岐阜,284,278,35,117,10,46,v
东京,379,340,71,46,22,16,h
茨城,450,262,34,65,9,20,v
千叶,450,327,34,90,10,32,v
福岛,386,215,98,47,36,17,h
新潟,319,215,67,47,19,17,h
山梨,349,340,30,55,8,13,v
静冈,333,395,46,38,9,12,h
爱知,284,395,49,38,11,12,h
神奈川,379,386,59,31,9,9,h`.split('\n').map((line) => {
    const [id, x, y, w, h, mx, my, direction] = line.split(',');
    return { 
        id,
        x: +x,
        y: +y,
        w: +w,
        h: +h,
        mx: +mx,
        my: +my,
        direction
    };
});

const themeColor = '#164c21';
const cn = '巡礼地图';
const en = `Anitabi`;
const scale = 4;
const width = 500;
const height = 500;

const canvas = document.createElement('canvas');
canvas.width = width * scale;
canvas.height = height * scale;


const output = canvas;

// const output = new Image();
// output.crossOrigin = 'anonymous';
document.querySelector('.junrevel-box').appendChild(output);

const outputBtn = document.querySelector('.output-btn');
const outputBox = document.querySelector('.output-shadow');
const outputImage = outputBox.querySelector('img');
const closeBtn = outputBox.querySelector('a');

const showOutput = url=>{
    outputImage.src = url;
    outputBox.removeAttribute('data-hidden');
}
closeBtn.onclick = () => outputBox.setAttribute('data-hidden','true')

const saveFile = (name,url)=>{
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
}
outputBtn.onclick = ()=>{
    // canvas.toBlob(blob=>{
    //     const url = URL.createObjectURL(blob);
    //     showOutput(url);
    // },'image/png');
    const url = canvas.toDataURL('image/png');
    showOutput(url);
    
    // 判断当前屏幕宽度 小于 600 时，不尝试自动下载
    if(window.innerWidth > 600) {
        saveFile(`巡礼等级_${en}_${new Date().toLocaleString()}.png`,url);
    }
}
const ctx = canvas.getContext('2d');

const fontSize = 14;

const horizontal = 'h';
const vertical = 'v';

ctx.lineCap = 'round';
ctx.lineJoin = 'round';


const getMojiWidth = (moji) => {

    if(MojiWidths[moji]) return MojiWidths[moji];
    if(/\d/.test(moji)) return 9;
    if(/[a-z]/.test(moji)) return 9;
    if(/[A-Z]/.test(moji)) return 9;



    return fontSize;

}
const handPathStr = 'M31.1,45.4c0,0,0.2-26.5,0.2-29.2c0-5.3,8-5.1,8,0c0,4.9,0,5.6,0,26.6c0,0,0-8,0-11.7c0-5.6,8-5.8,8,0c0,4.9,0,12.3,0,12.3s0-5.7,0-9.5c0-5.4,7.6-5,7.6,0.3c0,2.8,0,10.9,0,10.9c0,0,0-3.3,0-7.2c0-2.6,1.9-3.9,3.7-3.8c1.9,0.1,3.8,1.5,3.8,4.2c0.2,16.5-1,26.8-12.8,29.3c-14,3-23-6.3-33.1-25.6c-2.4-4.7,3.1-8.7,6.6-5.2C26.7,40.4,31.1,45.4,31.1,45.4z';
const handPath = new Path2D(handPathStr);
const drawHand = (x,y,scale = 1)=>{
    ctx.save();
    ctx.scale(scale, scale);


    ctx.translate(x, y);


    // 先向下移动 2px 画个投影
    // ctx.translate(0, 4);
    // ctx.fillStyle = 'rgba(0,0,0,.2)';
    // ctx.fill(handPath);
    // ctx.translate(0, -4);


    ctx.fillStyle = '#FFF';

    ctx.shadowBlur = 80;
    ctx.shadowOffsetY = 25;
    ctx.shadowColor = 'rgba(0,0,0,.4)';

    ctx.fill(handPath);
    ctx.strokeStyle = '#000';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
    ctx.stroke(handPath);
    ctx.restore();
}

const drawText = (text, x, y, direction = horizontal, scale = 1) => {
    ctx.save();
    ctx.translate( x, y );
    ctx.scale(scale, scale);
    ctx.lineWidth = 1.5;
    const mojis = text.split('');
    for(let i = 0; i < mojis.length; i++) {
        const moji = mojis[i];
        const path = MojiPaths[moji];
        if(!path) continue;
        ctx.stroke(path);

        const mojiW = getMojiWidth(moji);
        if(direction === horizontal) {
            ctx.translate( mojiW, 0 );
        } else {
            ctx.translate( 0, fontSize );
        }
    }
    ctx.restore();
}
const getBlobURL = async (canvas) => {
    return new Promise((resolve, reject) => {
        canvas.toBlob(blob => {
            resolve(URL.createObjectURL(blob));
        }, 'image/jpeg', 0.9);
    });
}

let frame = -1;
let nextFrameCount = 1;
const nekoFrameScale = 2;
const maxFrameIndex = 5;
const frameLefts = [
    110,
    30,
]

const nekoImage = new Image();
let nekoLoaded = false;
const loadNekoImage = ()=>{
    if(nekoImage.src) return;

    nekoImage.src = 'neko4.png';
    // 146 x 203 x 2px
    nekoImage.onload = () => {
        nekoLoaded = true;
        setTimeout(draw, 300);
    }
}

const drawNekoFrame = ()=>{
    if(frame < 0) return;
    const cutX = 0;
    const cutY = frame * 203;

    const left = frameLefts[frame] || 0;
    ctx.drawImage(
        nekoImage, 
        cutX * nekoFrameScale, cutY * nekoFrameScale, 146 * nekoFrameScale, 203 * nekoFrameScale,
        223 + left,
        33, 
        146, 203
    );
}

const draw = async () => {
    ctx.save();
    ctx.transform(scale, 0, 0, scale, 0, 0);
    ctx.fillStyle = '#D4FFD5';
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    ctx.setTransform(scale, 0, 0, scale, 0, 0);

    const level = getAllLevels();


    if(level){
        nextFrameCount = 1;
        loadNekoImage();
        outputBtn.setAttribute('data-active', 'true');
    }else{
        nextFrameCount = -1;
        outputBtn.setAttribute('data-active', 'false');
    }


    if(nekoLoaded){
        drawNekoFrame();

        const nextFrame = frame + nextFrameCount;

        if(nextFrame < maxFrameIndex && nextFrame >= -1) {
            frame = nextFrame;
            setTimeout(draw, 100);
        }
    }


    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000';
    for(let prefecture of prefectures) {
        const { id, x, y, w, h, mx, my, direction, level = 0 } = prefecture;
        const mojiX = x + mx;
        const mojiY = y + my;

        ctx.setTransform(scale, 0, 0, scale, 0, 0);

        ctx.fillStyle = '#' + ruleColors[level];

        ctx.fillRect(x, y, w, h);

        ctx.strokeRect(x, y, w, h);
        drawText(id, mojiX, mojiY, direction);
       
    }

    if(!level){
        drawHand(380,360);
    }

    drawText(`巡礼等级`, 30, 29, 'h', 3.6);

    if(level){
        const levelStr = String(level);
        drawText(levelStr, 260 - levelStr.length * 8 , 30, 'h', 3.6);
    }


    drawText(en, 386, 430, 'h', 2.1);
    drawText(cn, 376, 461, 'h', 2);

    ctx.fillStyle = 'rgba(0,100,0,.2)';
    ctx.font = '8px sans-serif';
    
    const date = new Date();
    const yyyyMMdd = [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
    ].map(v => String(v).padStart(2, '0')).join('');
    
    ctx.fillText([
        '巡礼等级',
        'anitabi.cn/junrevel',
        yyyyMMdd
    ].join(' · '), 15, 495);
    
    ctx.restore();

    await drawRules();

    if(output.tagName === 'IMG'){
        const blobURL = await getBlobURL(canvas);
        output.src = blobURL;
    }
    


}

const ruleNames = [
    '没去过',
    '旅行过',
    '巡礼过',
    '巡礼两部',
    '三部以上',
    '七部以上',
];
const ruleColors = 'FFF8AFAFBFE7FB7F77'.match(/.{3}/g);

const drawRules = async () => {
    const ruleStartX = 30;
    const ruleStartY = 100;
    const ruleHeight = 30;
    const ruleWidth = 140;

    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    for(let ruleIndex in ruleNames) {
        const ruleColor = '#' + ruleColors[ruleIndex];
        ctx.fillStyle = ruleColor;
        const ruleY = ruleStartY + ( ruleNames.length - ruleIndex - 1 ) * ruleHeight;
        ctx.fillRect(
            ruleStartX, 
            ruleY,
            ruleWidth, 
            ruleHeight
        );

        const ruleName = ruleNames[ruleIndex];
        drawText(ruleName, ruleStartX + 10, ruleY + 8 );

        drawText(ruleIndex, ruleStartX + 120, ruleY + 8)

    }
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.strokeRect(ruleStartX, ruleStartY, ruleWidth, ruleHeight * ruleNames.length);
}



const findPrefecture = (x, y) => {
    for(let prefecture of prefectures) {
        if(
            x >= prefecture.x &&
            x <= prefecture.x + prefecture.w &&
            y >= prefecture.y &&
            y <= prefecture.y + prefecture.h
        ) return prefecture;
    }
}

const getPrefectureLevel = (prefecture) => {
    return +prefecture.level || 0;
}
const setPrefectureLevel = (prefecture, level) => {
    prefecture.level = level;
    savePrefectureLevels();
    draw();
}

const prefectureLevelsStorageKey = 'pflvs';
const loadPrefectureLevels = () => {
    const levels = localStorage.getItem(prefectureLevelsStorageKey);
    if(!levels) return;
    const levelsArr = levels.split('');
    for(let i = 0; i < levelsArr.length; i++) {
        const prefecture = prefectures[i];
        if(!prefecture) continue;
        prefecture.level = +levelsArr[i] || 0;
    }
}

const getAllLevels = () => {
    return prefectures.reduce((acc, prefecture) => {
        return acc + getPrefectureLevel(prefecture);
    }, 0);
}

const savePrefectureLevels = () => {
    const levels = prefectures.map(prefecture => prefecture.level||0).join('');
    localStorage.setItem(prefectureLevelsStorageKey, levels);
}


const genSVGTextHTML = (text) => text.split('').map(moji=>`<svg width="14" height="14" viewBox="0 0 14 14" viewBox="0 0 14 14"><path d="${MojiPathStrs[moji]}" /></svg>`).join('')

const setLevelPopEl = document.createElement('div');
setLevelPopEl.id = '设置等级';
setLevelPopEl.innerHTML = `<h2>${genSVGTextHTML('巡礼等级')}</h2><div>${ruleNames.map((name, index) => `<a data-level="${index}" style="background:#${ruleColors[index]}">${genSVGTextHTML(name)}</a>`).join('')}</div>`;
document.body.appendChild(setLevelPopEl);    

const setLevelPopTitleEl = setLevelPopEl.querySelector('h2');
setLevelPopEl.onclick = e=>{
    e.preventDefault();
    e.stopPropagation();
    const { target } = e;
    const { tagName } = target;

    if(tagName === 'A'){
        const level = +target.dataset.level || 0;
        setPrefectureLevel(currentPrefecture, level);
        hideLevelPop();
    }
}

let currentPrefecture;
let levelPopIsShow = false;
const showLevelPop = (x, y, prefecture) => {
    levelPopIsShow = true;
    currentPrefecture = prefecture;
    setLevelPopEl.style.left = `${x}px`;
    setLevelPopEl.style.top = `${y}px`;
    setLevelPopEl.style.display = 'block';

    setLevelPopTitleEl.innerHTML = genSVGTextHTML(prefecture.id);

}
const hideLevelPop = () => {
    levelPopIsShow = false;
    setLevelPopEl.style.display = 'none';
}

const getXYFromEvent = (e) => {
    const rect = output.getBoundingClientRect();
    const ratio = width / rect.width;
    const x = (e.clientX - rect.left) * ratio;
    const y = (e.clientY - rect.top) * ratio;
    return { x, y, rect, ratio };
}

const popW = 208;
const popH = 328;
const popMargin = 10;

const popHalfW = popW / 2;
const popHalfH = popH / 2;

const htmlEl = document.documentElement;

const showLevelPopByRect = (rect, ratio, x, y, prefecture) =>{
    
    // setPrefectureLevel(prefecture, (level + 1) % ruleNames.length);
    let popX = rect.left + (prefecture.x + prefecture.w / 2) / ratio + htmlEl.scrollLeft;
    let popY = rect.top + (prefecture.y + prefecture.h / 2) / ratio + htmlEl.scrollTop;


    const maxLeft = rect.left + width / ratio - popHalfW - popMargin + htmlEl.scrollLeft;
    const maxTop = rect.top + height / ratio - popHalfH - popMargin + htmlEl.scrollTop;

    if(popX > maxLeft) popX = maxLeft;
    if(popY > maxTop) popY = maxTop;

    const minLeft = rect.left + popHalfW + popMargin + htmlEl.scrollLeft;
    const minTop = rect.top + popHalfH + popMargin + htmlEl.scrollTop;
    if(popX < minLeft) popX = minLeft;
    if(popY < minTop) popY = minTop;



    showLevelPop(
        popX - popHalfW,
        popY - popHalfH,
        prefecture
    );
}

document.onclick = (e) => {
    const {
        target 
    } = e;
    const {
        tagName
    } = target;

    if(target === canvas){
        const { x, y, rect, ratio } = getXYFromEvent(e);

        const prefecture = findPrefecture(x, y);
        if(!prefecture){
            if(levelPopIsShow){
                return hideLevelPop();
            }
        }
    
    
        if(prefecture) {
            showLevelPopByRect(rect, ratio, x, y, prefecture);
        }
    }
}

output.onmousemove = (e) => {
    const { x, y } = getXYFromEvent(e);

    const prefecture = findPrefecture(x, y);
    if(prefecture) {
        output.style.cursor = 'pointer';
    }else{
        output.style.cursor = 'default';
    }
}



loadPrefectureLevels();
draw();


window.onresize = ()=>{
    hideLevelPop();
}