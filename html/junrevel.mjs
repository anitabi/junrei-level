

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
京都,214,304,46,91,9,43,h
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



const logoPath = new Path2D(`M409.2,450.1c-1.5,1.3-3.1,2-4.9,2c-1.7,0-2.9-0.5-3.8-1.4c-0.7-0.8-1.1-1.8-1.1-3c0-1.7,0.7-3,2.2-3.8c0.8-0.4,2.6-0.8,5.3-1.1c0.9-0.1,1.5-0.3,1.7-0.6c0.1-0.2,0.2-0.4,0.2-0.7v-0.6c0-1.3-1-2-2.9-2c-1.1,0-1.9,0.2-2.5,0.7c-0.2,0.2-0.5,0.5-0.7,1c-0.3,0.6-0.7,0.8-1.2,0.8c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.3-0.3-0.5-0.3-0.8c0-0.6,0.3-1.3,1-2.1c1.1-1.2,2.6-1.8,4.6-1.8c2.1,0,3.6,0.5,4.4,1.5c0.7,0.8,1,1.7,1,2.7v8.2c0,0.5,0.4,0.9,1.1,1.1c0.5,0.1,0.8,0.4,0.8,1c0,0.4-0.1,0.7-0.4,1c-0.3,0.2-0.7,0.4-1.2,0.4C410.2,452.1,409.4,451.4,409.2,450.1zM408.8,444.5c-0.5,0.2-1.2,0.4-2,0.5c-1.9,0.2-3.2,0.6-3.8,1c-0.6,0.4-0.9,1-0.9,1.6c0,0.5,0.2,1,0.6,1.4c0.4,0.4,1.1,0.6,2.1,0.6c0.9,0,1.7-0.2,2.4-0.6c1.1-0.6,1.6-1.3,1.6-2.2V444.5zM418.3,439.4c0.5-0.9,1.1-1.5,1.6-1.9c0.8-0.6,1.9-0.9,3-0.9c1.4,0,2.5,0.4,3.3,1.2c0.6,0.7,1,1.7,1,2.9v9.4c0,0.6-0.1,1-0.3,1.2c-0.2,0.2-0.6,0.3-1,0.3c-0.5,0-0.8-0.1-1-0.3c-0.2-0.2-0.3-0.6-0.3-1.2v-8.1c0-1.3-0.5-2.3-1.6-2.7c-0.3-0.1-0.6-0.2-1-0.2c-0.2,0-0.6,0.1-1.1,0.3c-0.4,0.2-0.8,0.5-1.3,1.2c-0.3,0.4-0.5,0.7-0.6,1c-0.3,0.6-0.4,1.4-0.4,2.4v6.2c0,0.6-0.1,1-0.3,1.2c-0.2,0.2-0.6,0.3-1.1,0.3c-0.5,0-0.8-0.1-1-0.3c-0.2-0.2-0.3-0.6-0.3-1.2v-11.8c0-1,0.4-1.5,1.3-1.5c0.4,0,0.8,0.1,1.1,0.4c0.2,0.2,0.3,0.5,0.3,0.7V439.4zM432.8,430.9c0.5,0,0.9,0.2,1.3,0.5c0.3,0.3,0.5,0.7,0.5,1.2c0,0.6-0.2,1-0.6,1.4c-0.3,0.3-0.7,0.4-1.2,0.4c-0.5,0-1-0.2-1.4-0.6c-0.3-0.3-0.4-0.7-0.4-1.2c0-0.5,0.2-1,0.6-1.3C432,431,432.4,430.9,432.8,430.9zM431.5,449.9v-11.5c0-0.5,0.1-0.9,0.4-1.1c0.3-0.2,0.6-0.3,0.9-0.3c0.4,0,0.7,0.1,1,0.4c0.2,0.2,0.3,0.6,0.3,1v11.5c0,0.5-0.1,0.9-0.4,1.1c-0.3,0.2-0.6,0.3-0.9,0.3c-0.4,0-0.7-0.1-1-0.4C431.6,450.7,431.5,450.4,431.5,449.9zM442,439.3v9c0,0.5,0.1,0.8,0.2,0.9c0.2,0.2,0.5,0.2,1.1,0.2h0.1h0.2c0.7,0,1.1,0.4,1.1,1.2c0,0.5-0.1,0.8-0.3,1c-0.2,0.2-0.8,0.3-1.6,0.3c-1.1,0-1.9-0.1-2.4-0.4c-0.7-0.4-1-1.1-1-2.1v-10.3h-0.9c-0.8,0-1.2-0.4-1.2-1.3c0-0.8,0.4-1.3,1.2-1.3h0.9v-0.8c0-1.3,0.1-2.1,0.3-2.5c0.2-0.3,0.5-0.5,1-0.5c0.3,0,0.6,0.1,0.9,0.4c0.3,0.3,0.5,1,0.4,2.3c0,0.1,0,0.3,0,0.7c0,0.1,0,0.3,0,0.5h1.2c0.8,0,1.2,0.4,1.2,1.3c0,0.8-0.4,1.3-1.2,1.3H442zM456.4,450.1c-1.5,1.3-3.1,2-4.9,2c-1.7,0-2.9-0.5-3.8-1.4c-0.7-0.8-1.1-1.8-1.1-3c0-1.7,0.7-3,2.2-3.8c0.8-0.4,2.6-0.8,5.3-1.1c0.9-0.1,1.5-0.3,1.7-0.6c0.1-0.2,0.2-0.4,0.2-0.7v-0.6c0-1.3-1-2-2.9-2c-1.1,0-1.9,0.2-2.5,0.7c-0.2,0.2-0.5,0.5-0.7,1c-0.3,0.6-0.7,0.8-1.2,0.8c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.3-0.3-0.5-0.3-0.8c0-0.6,0.3-1.3,1-2.1c1.1-1.2,2.6-1.8,4.6-1.8c2.1,0,3.6,0.5,4.4,1.5c0.7,0.8,1,1.7,1,2.7v8.2c0,0.5,0.4,0.9,1.1,1.1c0.5,0.1,0.8,0.4,0.8,1c0,0.4-0.1,0.7-0.4,1c-0.3,0.2-0.7,0.4-1.2,0.4C457.4,452.1,456.7,451.4,456.4,450.1zM456,444.5c-0.5,0.2-1.2,0.4-2,0.5c-1.9,0.2-3.2,0.6-3.8,1c-0.6,0.4-0.9,1-0.9,1.6c0,0.5,0.2,1,0.6,1.4c0.4,0.4,1.1,0.6,2.1,0.6c0.9,0,1.7-0.2,2.4-0.6c1.1-0.6,1.6-1.3,1.6-2.2V444.5zM465.6,438.9c0.4-0.6,0.9-1.1,1.2-1.4c0.8-0.6,1.8-1,3-1c2.2,0,3.8,0.9,4.8,2.7c0.7,1.2,1.1,2.8,1.1,4.8c0,2.1-0.4,3.8-1.1,5.2c-0.5,0.8-1.1,1.5-1.9,1.9c-0.8,0.5-1.8,0.7-2.8,0.7c-1.8,0-3.2-0.7-4.2-2.1v1c0,0.4-0.1,0.7-0.3,0.8c-0.3,0.2-0.6,0.3-1,0.3c-0.8,0-1.2-0.5-1.2-1.5v-17.7c0-0.6,0.1-1,0.3-1.2c0.2-0.2,0.5-0.3,1-0.3c0.4,0,0.8,0.1,1,0.3c0.2,0.2,0.3,0.6,0.3,1.2V438.9zM469.3,439c-1,0-1.8,0.4-2.5,1.1c-0.4,0.4-0.7,1.1-0.9,1.9c-0.2,0.7-0.3,1.4-0.3,2.1c0,1.3,0.3,2.5,0.8,3.5c0.3,0.5,0.7,1,1.2,1.3c0.5,0.3,1,0.4,1.6,0.4c1.1,0,1.9-0.4,2.6-1.2c0.4-0.4,0.7-1.1,0.9-1.9c0.2-0.7,0.3-1.3,0.3-2c0-1.4-0.3-2.6-0.8-3.4C471.6,439.7,470.6,439,469.3,439zM480.5,430.9c0.5,0,0.9,0.2,1.3,0.5c0.3,0.3,0.5,0.7,0.5,1.2c0,0.6-0.2,1-0.6,1.4c-0.3,0.3-0.7,0.4-1.2,0.4c-0.5,0-1-0.2-1.4-0.6c-0.3-0.3-0.4-0.7-0.4-1.2c0-0.5,0.2-1,0.6-1.3C479.6,431,480,430.9,480.5,430.9zM479.1,449.9v-11.5c0-0.5,0.1-0.9,0.4-1.1c0.3-0.2,0.6-0.3,0.9-0.3c0.4,0,0.7,0.1,1,0.4c0.2,0.2,0.3,0.6,0.3,1v11.5c0,0.5-0.1,0.9-0.4,1.1c-0.3,0.2-0.6,0.3-0.9,0.3c-0.4,0-0.7-0.1-1-0.4C479.2,450.7,479.1,450.4,479.1,449.9zM376.5,479.8v-6.5c0-0.6-0.1-0.9-0.2-1c-0.1-0.1-0.3-0.2-0.5-0.2h-1.5c-0.8,0-1.2-0.4-1.2-1.3c0-0.9,0.4-1.3,1.2-1.3h2.7c1.5,0,2.2,0.8,2.2,2.4v8c0.2,0.1,0.5,0.4,0.9,0.8c0.6,0.7,1.2,1.1,1.7,1.3c1,0.4,2.5,0.6,4.6,0.6h11.2c0.5,0,0.9,0.2,1.2,0.5c0.2,0.2,0.3,0.5,0.3,0.8c0,0.4-0.1,0.7-0.4,1c-0.2,0.2-0.6,0.3-1.1,0.3h-10.4c-2.9,0-5-0.2-6.3-0.7c-0.6-0.2-1.3-0.7-1.9-1.4c-0.5-0.5-0.8-0.8-1-0.8c-0.1,0-0.2,0-0.2,0.1c-0.5,0.3-0.9,0.8-1.3,1.4c-0.8,1.2-1.5,1.8-2.1,1.8c-0.4,0-0.7-0.2-1-0.5c-0.2-0.3-0.4-0.5-0.4-0.8c0-0.5,0.4-1.3,1.3-2.3C375.2,480.9,375.9,480.2,376.5,479.8zM375.8,461c0.6,0,1.8,1,3.5,3.1c0.7,0.9,1.1,1.6,1.1,2.1c0,0.4-0.2,0.8-0.5,1.1c-0.2,0.2-0.5,0.3-0.8,0.3c-0.2,0-0.4-0.1-0.7-0.2c-0.1-0.1-0.4-0.4-0.8-0.9l-0.7-0.8c-0.2-0.2-0.5-0.6-1-1.1c-0.6-0.7-1-1.1-1.2-1.4c-0.2-0.3-0.3-0.6-0.3-0.8c0-0.4,0.2-0.7,0.5-0.9C375.2,461.1,375.5,461,375.8,461zM385,460.4c0.4,0,0.8,0.1,1,0.4c0.2,0.2,0.3,0.4,0.3,0.7c0,0.8-0.3,2-1,3.6c-0.1,0.2-0.2,0.5-0.3,0.9c-0.5,1.4-1.1,2.6-1.7,3.7c-0.2,0.4-0.3,0.8-0.3,1c0,0.1,0.1,0.3,0.2,0.7c0,0.1,0.4,0.9,1.2,2.4c1.2,2.8,1.9,4.5,2.1,5.1c0.2,0.6,0.3,1.1,0.3,1.6c0,0.4-0.1,0.7-0.4,1c-0.2,0.2-0.5,0.3-0.9,0.3c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.2-0.4-0.6-0.5-1.1l-0.6-1.8c-0.3-1-0.7-2-1-2.8c-0.2-0.5-0.7-1.6-1.5-3.2c-0.4-0.8-0.6-1.4-0.6-1.8c0-0.4,0.2-0.9,0.5-1.6l1-2.1c0.7-1.5,1.2-2.9,1.5-4.4c0.2-1,0.5-1.7,0.9-1.9C384.5,460.5,384.8,460.4,385,460.4zM396.7,460.5c0.4,0,0.8,0.2,1,0.5c0.2,0.2,0.3,0.5,0.3,0.8c0,0.7-0.4,2-1.2,4c-0.7,1.6-1.3,3-1.9,4c-0.2,0.4-0.3,0.7-0.3,1c0,0.1,0.1,0.3,0.2,0.7c0,0.1,0.4,0.9,1.2,2.4c1.2,2.7,1.9,4.3,2.1,4.8c0.2,0.5,0.3,1.1,0.3,1.6c0,0.4-0.2,0.8-0.5,1c-0.2,0.2-0.5,0.3-0.9,0.3c-0.5,0-0.9-0.3-1.1-0.9c-0.1-0.3-0.6-1.6-1.4-3.8c-0.3-0.8-1-2.3-2.1-4.3c-0.4-0.8-0.6-1.4-0.6-1.8c0-0.4,0.2-0.9,0.5-1.6l1-2.1c0.7-1.4,1.2-2.9,1.5-4.3c0.2-1,0.6-1.7,0.9-2C396.1,460.6,396.4,460.5,396.7,460.5zM390.9,460.5c0.4,0,0.8,0.1,1,0.4c0.2,0.2,0.3,0.4,0.3,0.7c0,0.7-0.4,2.1-1.2,4c-0.7,1.6-1.3,3-1.9,4c-0.2,0.4-0.4,0.7-0.4,1c0,0.3,0.2,0.9,0.7,1.8c0.7,1.2,1.5,3.1,2.5,5.6c0.3,0.8,0.5,1.5,0.5,2.1c0,0.4-0.1,0.8-0.4,1c-0.2,0.2-0.5,0.3-0.9,0.3c-0.4,0-0.7-0.1-0.9-0.4c-0.2-0.3-0.4-0.6-0.5-1.1l-0.6-1.8c-0.3-1-0.6-1.9-0.9-2.5c-0.2-0.4-0.7-1.5-1.6-3.2c-0.4-0.8-0.6-1.4-0.6-1.8c0-0.4,0.2-0.9,0.5-1.6l1.1-2.1c0.7-1.5,1.3-2.9,1.6-4.3c0.2-1,0.5-1.7,0.9-1.9C390.4,460.6,390.6,460.5,390.9,460.5zM409.1,472.3c1,0.8,1.7,1.4,2.3,1.9c1.2,1.1,1.8,1.9,1.8,2.6c0,0.3-0.2,0.7-0.5,1c-0.3,0.2-0.6,0.4-0.8,0.4c-0.2,0-0.5-0.1-0.8-0.3c-0.2-0.1-0.5-0.5-1.2-1.3c-0.3-0.3-0.7-0.8-1.3-1.4v9.7c0,0.4-0.1,0.8-0.4,1c-0.3,0.2-0.6,0.4-1,0.4c-0.4,0-0.8-0.1-1-0.4c-0.2-0.2-0.3-0.6-0.3-1v-9c-0.5,0.4-0.9,0.7-1.2,1c-1.1,0.9-2,1.4-2.5,1.4c-0.4,0-0.7-0.2-1-0.5c-0.2-0.3-0.4-0.6-0.4-0.9c0-0.4,0.2-0.8,0.7-1.1c0.1-0.1,0.5-0.4,1.1-0.8c1.1-0.8,2.4-1.9,3.7-3.4c0.7-0.7,1.2-1.4,1.8-2.2c0.5-0.8,0.8-1.3,0.8-1.5c0-0.1,0-0.1-0.1-0.2c0,0-0.3-0.1-0.7-0.1h-5.6c-0.3,0-0.6-0.1-0.8-0.4c-0.2-0.3-0.4-0.6-0.4-0.9c0-0.4,0.1-0.7,0.4-1c0.2-0.2,0.5-0.3,0.8-0.3h4.4c-0.2-0.2-0.5-0.5-0.8-0.9c-0.1-0.1-0.3-0.4-0.7-0.9l-0.4-0.5l-0.2-0.2c-0.3-0.5-0.5-0.9-0.5-1c0-0.3,0.1-0.6,0.4-0.8c0.3-0.2,0.6-0.3,0.9-0.3c0.6,0,1.3,0.5,2.1,1.4c0.8,1,1.1,1.7,1.1,2.3c0,0.4-0.2,0.7-0.7,1h2.5c0.4,0,0.8,0.2,1,0.5c0.3,0.3,0.4,0.6,0.4,0.9c0,0.5-0.3,1.4-0.8,2.5C410.9,469.9,410.2,471,409.1,472.3zM414.5,480.9v-19.2c0-0.4,0.1-0.7,0.4-0.9c0.3-0.2,0.6-0.4,1-0.4c0.4,0,0.8,0.2,1.1,0.5c0.2,0.2,0.3,0.5,0.3,0.8v18.6c0,1,0.1,1.6,0.4,1.9c0.3,0.3,0.8,0.4,1.6,0.4h2.2c0.7,0,1.2-0.2,1.5-0.5c0.3-0.3,0.5-0.9,0.7-1.8c0.1-0.8,0.2-1.6,0.2-2.4c0-1.4,0.4-2.1,1.4-2.1c1,0,1.5,0.6,1.5,1.8c0,1-0.2,2.5-0.5,4.4c-0.2,1.4-0.8,2.3-1.7,2.8c-0.7,0.4-1.7,0.6-3.1,0.6h-2.2c-1.8,0-3.1-0.3-3.8-1c-0.4-0.4-0.7-0.9-0.9-1.5C414.6,482.5,414.5,481.8,414.5,480.9zM447.6,466.4l3.3-1c0.6-0.2,0.9-0.3,1.1-0.3c0.4,0,0.8,0.1,1.1,0.3c0.5,0.3,0.8,1,0.8,2.3c0,0.4,0,0.8,0,1.1c0,3.8-0.1,6.1-0.3,6.9c-0.3,1.5-1.2,2.3-2.7,2.3c-1.9,0-2.9-0.5-2.9-1.6c0-0.4,0.1-0.7,0.4-1c0.2-0.1,0.3-0.2,0.5-0.2c0.1,0,0.4,0.1,1,0.2c0.1,0,0.2,0,0.4,0c0.5,0,0.7-0.3,0.8-0.9c0.1-0.6,0.2-2,0.2-4.2c0-1.1,0-1.7-0.1-1.9c0-0.1-0.1-0.2-0.3-0.2c-0.1,0-0.3,0-0.5,0.1l-2.8,0.9v9.6c0,0.4-0.1,0.7-0.4,1c-0.2,0.2-0.5,0.3-0.9,0.3c-0.4,0-0.7-0.1-1-0.4c-0.2-0.2-0.3-0.5-0.3-0.8V470l-2.9,0.9v10c0,0.9,0.3,1.4,0.8,1.6c0.5,0.2,1.8,0.3,4,0.3l0.6,0l1.8,0c1.2,0,2.1-0.2,2.5-0.5c0.2-0.1,0.3-0.4,0.4-0.8c0-0.1,0.1-0.7,0.2-2c0.1-0.8,0.5-1.1,1.3-1.1c0.5,0,0.8,0.2,1.1,0.5c0.2,0.2,0.3,0.5,0.3,0.9c0,0.9-0.1,1.9-0.3,3c-0.2,1.2-0.9,2-2,2.4c-0.9,0.3-2.8,0.4-5.7,0.4c-2.1,0-3.5-0.1-4.3-0.2c-1.3-0.2-2.2-0.6-2.5-1.2c-0.4-0.6-0.6-1.5-0.6-2.6v-9.8l-1,0.3c-0.2,0.1-0.4,0.1-0.6,0.1c-0.3,0-0.6-0.1-0.8-0.4c-0.3-0.3-0.4-0.7-0.4-1.1c0-0.5,0.3-0.9,1-1.1l1.8-0.5v-4.7c0-0.4,0.1-0.6,0.4-0.9c0.3-0.2,0.6-0.3,0.9-0.3c0.4,0,0.7,0.1,1,0.4c0.2,0.2,0.3,0.5,0.3,0.8v3.9l2.9-0.9v-5.8c0-0.3,0.1-0.6,0.4-0.8c0.3-0.2,0.6-0.3,0.9-0.3c0.4,0,0.7,0.1,1,0.4c0.2,0.2,0.3,0.5,0.3,0.7V466.4zM432.3,480.2v-10.5h-2c-0.3,0-0.6-0.1-0.9-0.4c-0.2-0.3-0.3-0.5-0.3-0.9c0-0.4,0.1-0.7,0.4-1c0.2-0.2,0.5-0.3,0.8-0.3h2v-5c0-1.2,0.4-1.7,1.3-1.7c0.9,0,1.4,0.6,1.4,1.7v5h1.6c0.3,0,0.6,0.1,0.8,0.4c0.2,0.3,0.4,0.6,0.4,0.9c0,0.4-0.1,0.7-0.4,1c-0.2,0.2-0.5,0.3-0.7,0.3H435v9.4c0.4-0.2,0.8-0.4,1-0.5c0.5-0.3,0.9-0.4,1.2-0.4c0.2,0,0.5,0.1,0.7,0.4c0.3,0.3,0.4,0.6,0.4,1c0,0.6-0.6,1.2-1.9,1.9c-0.1,0.1-1.2,0.5-3.1,1.2c-1.6,0.6-2.7,0.9-3.3,0.9c-0.8,0-1.3-0.5-1.3-1.5c0-0.3,0.1-0.5,0.3-0.7c0.2-0.2,0.5-0.4,0.8-0.5l1.9-0.6C432,480.3,432.1,480.2,432.3,480.2zM464.7,477.7c0.2,0,1.3,0.2,3.3,0.5c1.4,0.2,2.5,0.5,3.5,0.7c1,0.2,1.7,0.4,2.1,0.5c1.3,0.2,2.1,0.5,2.4,0.9c0.2,0.2,0.2,0.4,0.2,0.7c0,0.3-0.1,0.6-0.4,0.9c-0.2,0.2-0.4,0.2-0.6,0.2c-0.4,0-1-0.1-1.9-0.4c-1.5-0.5-4.3-1-8.3-1.6c-1.1-0.2-1.6-0.6-1.6-1.2c0-0.3,0.1-0.6,0.3-0.8C463.9,477.8,464.3,477.7,464.7,477.7zM467.4,474.5c0.3,0,1.2,0.1,2.8,0.5c1.7,0.3,2.8,0.6,3.3,0.8c0.5,0.2,0.7,0.5,0.7,0.9c0,0.4-0.1,0.6-0.3,0.9c-0.2,0.2-0.3,0.2-0.5,0.2c-0.2,0-0.7-0.1-1.2-0.3c-0.8-0.2-2.3-0.5-4.5-0.9c-0.6-0.1-1-0.3-1.1-0.5c-0.1-0.2-0.2-0.4-0.2-0.6C466.3,474.9,466.7,474.6,467.4,474.5zM481.6,464.9v16.5c0,0.8-0.1,1.3-0.2,1.7c-0.3,0.8-0.9,1.4-1.7,1.7c-0.3,0.1-0.9,0.2-1.8,0.2h-16c-0.8,0-1.4-0.1-1.7-0.2c-0.8-0.3-1.4-0.9-1.8-1.7c-0.1-0.3-0.2-0.9-0.2-1.7v-16.5c0-0.8,0.1-1.3,0.2-1.7c0.3-0.8,0.9-1.4,1.7-1.7c0.3-0.1,0.9-0.2,1.7-0.2h16c0.8,0,1.4,0.1,1.8,0.2c0.8,0.3,1.4,0.9,1.7,1.7C481.6,463.6,481.6,464.2,481.6,464.9zM465.6,469.4c-1.2,1.1-2.2,1.7-2.8,1.7c-0.3,0-0.6-0.1-0.8-0.4c-0.2-0.2-0.3-0.5-0.3-0.8c0-0.3,0.2-0.6,0.5-0.9c0.1-0.1,0.5-0.4,1-0.8c1.1-0.8,2-1.6,2.6-2.6c0.6-0.9,1-1.4,1.1-1.5c0.2-0.2,0.5-0.4,0.7-0.4h-5.2c-0.5,0-0.8,0.1-1.1,0.3c-0.2,0.2-0.4,0.6-0.4,1.1v16.1c0,1,0.5,1.5,1.4,1.5h15.3c1,0,1.4-0.5,1.4-1.5v-16.1c0-0.5-0.1-0.9-0.4-1.1c-0.2-0.2-0.6-0.3-1.1-0.3h-9.7c0.1,0,0.3,0.1,0.4,0.1c0.4,0.2,0.6,0.6,0.6,1c0,0.2-0.1,0.4-0.2,0.6h5.4c1.3,0,1.9,0.4,1.9,1.3c0,0.8-0.7,1.8-2,3.1c-0.5,0.5-1.2,1.1-1.9,1.6c0.5,0.2,0.9,0.4,1.4,0.6c1.8,0.7,3.2,1.2,3.9,1.4c0.7,0.2,1.1,0.4,1.2,0.6c0.1,0.2,0.2,0.3,0.2,0.6c0,0.4-0.1,0.7-0.3,0.9c-0.2,0.2-0.5,0.4-0.7,0.4c-0.4,0-1.2-0.2-2.3-0.6c-2.7-1-4.5-1.8-5.5-2.4c-0.4,0.3-1.1,0.6-1.9,1c-0.4,0.2-1.5,0.7-3.4,1.3c-1.3,0.5-2.2,0.7-2.6,0.7c-0.2,0-0.5-0.1-0.7-0.3c-0.2-0.2-0.3-0.5-0.3-0.8c0-0.2,0.1-0.4,0.2-0.6c0.2-0.3,0.8-0.5,1.7-0.8c1.5-0.4,3.1-1.1,4.8-1.9C467.2,471,466.5,470.3,465.6,469.4zM467.2,467.9c0.8,0.9,1.8,1.7,2.8,2.4c0.7-0.5,1.4-0.9,1.8-1.4c0.6-0.5,0.8-0.9,0.8-1.1c0-0.1-0.1-0.2-0.4-0.2h-4.9l-0.1,0.1l0,0.1L467.2,467.9z`);

const scale = 2;
const width = 500;
const height = 500;

const canvas = document.createElement('canvas');
canvas.width = width * scale;
canvas.height = height * scale;


const output = canvas;

// const output = new Image();
// output.crossOrigin = 'anonymous';
document.body.appendChild(output);


const ctx = canvas.getContext('2d');

const fontSize = 14;

const horizontal = 'h';
const vertical = 'v';

ctx.lineCap = 'round';
ctx.lineJoin = 'round';


const MojiWidths = {
    i: 5,
    t: 7,
    n: 7,
    b: 7,
}
const getMojiWidth = (moji) => {

    if(MojiWidths[moji]) return MojiWidths[moji];
    if(/\d/.test(moji)) return 9;
    if(/[a-z]/.test(moji)) return 9;
    if(/[A-Z]/.test(moji)) return 9;



    return fontSize;

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
const draw = async () => {
    ctx.save();
    ctx.transform(scale, 0, 0, scale, 0, 0);
    ctx.fillStyle = '#D4FFD5';
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    ctx.fillStyle = '#DDD';
    ctx.fill(logoPath);

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
    drawText(`巡礼等级`, 30, 30, 'h', 3.6);

    const level = getAllLevels();
    if(level){
        const levelStr = String(level);
        drawText(levelStr, 260 - levelStr.length * 8 , 30, 'h', 3.6);
    }


    drawText(`Anitabi`, 372, 430, 'h', 2);
    drawText(`巡礼地图`, 372, 460, 'h', 2);

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
    const levels = prefectures.map(prefecture => prefecture.level).join('');
    localStorage.setItem(prefectureLevelsStorageKey, levels);
}


const genSVGTextHTML = (text) => text.split('').map(moji=>{
    return `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="${MojiPathStrs[moji]}" stroke="#000" stroke-width="1.5" />
</svg>`;
}).join('')

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
        console.log(level);
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
    
    console.log(prefecture);
    // const level = getPrefectureLevel(prefecture) || 0;
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

output.onmousemove = (e) => {
    const { x, y } = getXYFromEvent(e);

    // console.log(e.clientX,e.clientY,x,y);

    const prefecture = findPrefecture(x, y);
    if(prefecture) {
        output.style.cursor = 'pointer';
    }else{
        output.style.cursor = 'default';
    }
}



loadPrefectureLevels();
draw();
