const fs = require('fs')

function createNewDiary() {
  const fixZero = n => (n > 9 ? n : `0${n}`)

  const d = new Date()
  const today = `${d.getFullYear()}-${fixZero(d.getMonth() + 1)}-${fixZero(d.getDate())}`
  const total = Math.round((new Date(today.replace(/-/g, '/')) - new Date('2023/02/12')) / 86400000)
  const title = `${today} 自律打卡第${total}天`

  const filePath = `${title}.md`
  if (fs.existsSync(filePath)) {
    throw new Error(`${filePath} 已存在`)
  }

  const tpl = `\
# ${title}

## 自律任务完成情况

- [ ] 8:00 起床 
- [ ] 8:25 读书
- [ ] 8:40 出发上班 
- [ ] 8:50 英语学习


- [ ] 22:50 健身
- [ ] 23:20 洗漱
- [ ] 24:00 睡觉


## 当天日记

---
**早晨：**

xxx

***读书心得***

xxx

---

**晚上：**

xx

`

  fs.writeFileSync(filePath, tpl, { encoding: 'utf-8' })
  console.log(title)
  console.log()
}

createNewDiary()
