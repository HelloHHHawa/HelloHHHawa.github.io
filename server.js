const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// 静态文件服务
app.use(express.static('public'));

// 解析JSON请求体
app.use(express.json());

// 保存选择的数字
app.post('/save', (req, res) => {
    const selectedNumber = req.body.number;

    // 将数据保存到JSON文件
    const data = { number: selectedNumber };
    fs.writeFileSync(path.join(__dirname, 'selectedNumber.json'), JSON.stringify(data));

    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});
