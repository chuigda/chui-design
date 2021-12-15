import React, { useState } from 'react'

import './chui-style.css'
import { CreateWindow, WindowManager } from './chui-components/window-mgr.jsx'
import LineEdit from './chui-components/line-edit.jsx'
import Button from './chui-components/button.jsx'
import { HSpacer, VSpacer } from './chui-components/spacer.jsx'
import TextArea from './chui-components/text-area.jsx'
import ScrollArea from './chui-components/scroll-area.jsx'

import { getGlobalColor } from './chui-config/color'

const allowDrop = event => {
  event.preventDefault()
  // eslint-disable-next-line no-param-reassign
  event.dataTransfer.dropEffect = 'move'
}

const blogWindowContent = (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2px'
  }}>
    <ScrollArea style={{ height: '360px', width: '100%' }} scroll="y">
      <span>我好菜啊 我菜爆了 我是什么垃圾 我好堕落</span><br/>
      <span>为什么大佬学的都又快又好 而我呢 整天就学这么点东西 还学的快自闭了</span><br/>
      <span>我就想不明白了 为什么公司会招我这种 在青大排名倒数的菜鸡</span><br/>
      <span>真的是把我招进来 给大家虐 给大家找自信的吗</span><br/>
      <span>我好菜菜啊 再这样下去就没人要了 我就只能混吃等死了</span><br/>
      <span>我越来越觉得自己是废物一个</span><br/>
      <span>有些人啊 整天就知道卖弱 不像我 是什么水平 就是什么水平</span><br/>
      <span>我这种不行的就下线了吧</span><br/>
      <span>幸亏公司招的人多 不然我这种闲鱼进不来</span><br/>
      <span>我真的好羡慕那些 不用学 也可以满绩的 我真的不一样 我真的是 学到自闭 没有办法 毕竟水平不行</span><br/>
      <span>我看不到历史的进程 我觉得我也快被淘汰了</span><br/>
      <span>唉 想想自己已经荒废了这么多年 我还能做什么呢</span><br/>
      <span>我觉得我对我自己有多菜，一直有比较清晰的认识</span><br/>
      <span>我的脑子就是知识的筛子 以至于我什么都不会</span><br/>
      <span>我太菜了 可没人觉得我菜 这就很让人苦恼</span><br/>
      <span>是我觉得自己太菜了 所以要把菜带给更多的人 这样大家就知道 菜也没关系 总有更菜的
            Chuigda 给你们垫底</span><br/>
      <span>唉 只可惜我没有抓住机会 去了一个大佬太多的组 发现自己根本没什么水平 被打回原形好好学习混吃等死</span><br/>
      <span>突然觉得自己好失败 大学四年一晃而过 我卷不过别人 做不了嗑盐 写不动程序 听不懂课 我仿佛是个废物</span><br/>
      <span>我太菜了 在简历里只敢写自己有 basic understanding 和 beginner’s experience</span><br/>
      <span>想想我的大学四年 我就感觉自己和废物没什么差别</span><br/>
      <span>大家个个都是人才 只有我这种又弱小又菜 还不努力的人 唯二的选择就是躲在角落里瑟瑟发抖 深夜在浅粉色床单上默默哭泣</span><br/>
      <span>我在十月份以前也想不到我这种废物也能进 CS 然而进来以后才发现 自己只能在这里越变越菜 看着同学 paper 发到手软 自己瑟瑟发抖</span><br/>
      <span>做题能解决的事情 都不是事 只可惜我的人生已过了二十年 我才认识到这个道理 花了太多时间做题 最后什么也没学到 这就是我的失败人生了</span><br/>
    </ScrollArea>
    <hr style={{ width: '100%' }} />
    <ScrollArea scroll="y" style={{
      height: '150px',
      width: '100%',
      padding: '4px'
    }}>
      <div style={{ width: '100%', userSelect: 'none' }}>
        Comment from <b>Lyzh</b>:<br/>
        打死，禁止卖弱
      </div>
      <hr/>
      <div style={{ width: '100%', userSelect: 'none' }}>
        Comment from <b>ice1000</b>:<br/>
        锤哥你又在卖弱哦，休息一下吧<br/>
        去看个 issue，合个 PR 好不好
      </div>
      <hr/>
      <div style={{ width: '100%', userSelect: 'none' }}>
        Comment from <b>ClearLove灬Star</b>:<br/>
        你怕不是头 ju 哦
      </div>
      <hr/>
      <div style={{ width: '100%', userSelect: 'none' }}>
        Comment from <b>我是一只鲨鱼</b>:<br/>
        沙雕
      </div>
      <hr/>
      <div style={{ width: '100%', userSelect: 'none' }}>
        Comment from <b>Schrodinger Zhu</b>:<br/>
        辣鸡 iceyey
      </div>
    </ScrollArea>
    <hr style={{ width: '100%' }}/>
    <TextArea style={{
      width: '100%',
      height: '120px',
      overflowY: 'scroll'
    }} placeholder="your comment"/>
    <VSpacer/>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      width: '100%'
    }}>
      <LineEdit placeholder="your name" style={{ width: '100%' }}/>
      <HSpacer count={4} />
      <LineEdit placeholder="your email" style={{ width: '100%' }}/>
      <HSpacer count={4} />
      <Button>Comment</Button>
    </div>
  </div>
)

const App = () => {
  const [windowList, setWindowList] = useState([])
  return (
    <div className="app"
         onDragOver={allowDrop}
         style={{ width: '100%', height: '100%', backgroundColor: getGlobalColor().colorPlate.cyan }}>
      <WindowManager windowList={windowList} setWindowList={setWindowList}>
        <CreateWindow title="Read blog: 我太菜了 by Chuigda WhiteGive"
                      style={{ width: '800px' }}
                      pos={{ x: 20, y: 20 }}
                      foreColor="blue">
          {blogWindowContent}
        </CreateWindow>
        <CreateWindow title="Yet another window"
                      foreColor="blue"
                      style={{ width: '400px' }}>
          <span>Another window</span>
        </CreateWindow>
      </WindowManager>
    </div>
  )
}

export default App
