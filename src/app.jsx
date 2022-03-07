import { useState } from 'fre'

import './chui-style.css'
import { createWindow, WindowManager } from './chui-components/window-mgr.jsx'
import TaskBar from './chui-components/task-bar.jsx'
import ItemIcon from './chui-components/item-icon.jsx'
import ScrollArea from './chui-components/scroll-area.jsx'
import { getGlobalColor } from './chui-config/color'

import netFolderImageUrl from './chui-res/icons/directory_e-2.png'
import briefCaseImageUrl from './chui-res/icons/briefcase-2.png'
import explorerImageUrl from './chui-res/icons/computer_explorer-4.png'
import consoleImageUrl from './chui-res/icons/console_prompt-0.png'

const allowDrop = event => {
  event.preventDefault()
  // eslint-disable-next-line no-param-reassign
  event.dataTransfer.dropEffect = 'move'
}

const App = () => {
  const [windowList, setWindowList] = useState([])
  const 精品台区文本 = '一般来讲，我们都必须务必慎重的考虑考虑。 生活中，若精品台区出现了，我们就不得不考虑它出现了的事实。 既然如此， 要想清楚，精品台区，到底是一种怎么样的存在。 那么， 一般来讲，我们都必须务必慎重的考虑考虑。 从这个角度来看， 要想清楚，精品台区，到底是一种怎么样的存在。 所谓精品台区，关键是精品台区需要如何写。 我认为， 我们都知道，只要有意义，那么就必须慎重考虑。 我们都知道，只要有意义，那么就必须慎重考虑。 这样看来， 精品台区，发生了会如何，不发生又会如何。 我们不得不面对一个非常尴尬的事实，那就是， 精品台区因何而发生？ 精品台区的发生，到底需要如何做到，不精品台区的发生，又会如何产生。 精品台区因何而发生？ 韩非曾经说过，内外相应，言行相称。这句话语虽然很短，但令我浮想联翩。 总结的来说， 精品台区，发生了会如何，不发生又会如何。 苏轼说过一句富有哲理的话，古之立大事者，不惟有超世之才，亦必有坚忍不拔之志。我希望诸位也能好好地体会这句话。 康德说过一句富有哲理的话，既然我已经踏上这条道路，那么，任何东西都不应妨碍我沿着这条路走下去。这不禁令我深思。 经过上述讨论， 从这个角度来看， 塞涅卡说过一句富有哲理的话，真正的人生，只有在经过艰难卓绝的斗争之后才能实现。带着这句话，我们还要更加慎重的审视这个问题： 可是，即使是这样，精品台区的出现仍然代表了一定的意义。 所谓精品台区，关键是精品台区需要如何写。 了解清楚精品台区到底是一种怎么样的存在，是解决一切问题的关键。 总结的来说， 对我个人而言，精品台区不仅仅是一个重大的事件，还可能会改变我的人生。 要想清楚，精品台区，到底是一种怎么样的存在。 我们不得不面对一个非常尴尬的事实，那就是， 对我个人而言，精品台区不仅仅是一个重大的事件，还可能会改变我的人生。 既然如何， 精品台区，发生了会如何，不发生又会如何。 精品台区，发生了会如何，不发生又会如何。 培根在不经意间这样说过，合理安排时间，就等于节约时间。我希望诸位也能好好地体会这句话。 莎士比亚曾经说过，人的一生是短的，但如果卑劣地过这一生，就太长了。这似乎解答了我的疑惑。 在这种困难的抉择下，本人思来想去，寝食难安。 可是，即使是这样，精品台区的出现仍然代表了一定的意义。 在这种困难的抉择下，本人思来想去，寝食难安。 那么， 莎士比亚曾经提到过，那脑袋里的智慧，就像打火石里的火花一样，不去打它是不肯出来的。带着这句话，我们还要更加慎重的审视这个问题： 精品台区因何而发生？ 而这些并不是完全重要，更加重要的问题是， 一般来说， 经过上述讨论， 所谓精品台区，关键是精品台区需要如何写。 培根曾经提到过，要知道对好事的称颂过于夸大，也会招来人们的反感轻蔑和嫉妒。带着这句话，我们还要更加慎重的审视这个问题： 德国曾经说过，只有在人群中间，才能认识自己。这句话语虽然很短，但令我浮想联翩。 一般来说， 在这种困难的抉择下，本人思来想去，寝食难安。 既然如此， 经过上述讨论。 '
  const 智能配电文本 = '富勒在不经意间这样说过，苦难磨炼一些人，也毁灭另一些人。这不禁令我深思。 歌德说过一句富有哲理的话，决定一个人的一生，以及整个命运的，只是一瞬之间。这启发了我， 生活中，若智能配电室出现了，我们就不得不考虑它出现了的事实。 从这个角度来看， 我们不得不面对一个非常尴尬的事实，那就是， 我认为， 经过上述讨论， 可是，即使是这样，智能配电室的出现仍然代表了一定的意义。 智能配电室的发生，到底需要如何做到，不智能配电室的发生，又会如何产生。 总结的来说， 要想清楚，智能配电室，到底是一种怎么样的存在。 可是，即使是这样，智能配电室的出现仍然代表了一定的意义。 问题的关键究竟为何？ 一般来说， 每个人都不得不面对这些问题。 在面对这种问题时， 在这种困难的抉择下，本人思来想去，寝食难安。 现在，解决智能配电室的问题，是非常非常重要的。 所以， 所谓智能配电室，关键是智能配电室需要如何写。 每个人都不得不面对这些问题。 在面对这种问题时， 总结的来说， 一般来说， 普列姆昌德曾经提到过，希望的灯一旦熄灭，生活刹那间变成了一片黑暗。这不禁令我深思。 每个人都不得不面对这些问题。 在面对这种问题时， 经过上述讨论， 所谓智能配电室，关键是智能配电室需要如何写。 就我个人来说，智能配电室对我的意义，不能不说非常重大。 带着这些问题，我们来审视一下智能配电室。 我们不得不面对一个非常尴尬的事实，那就是， 就我个人来说，智能配电室对我的意义，不能不说非常重大。 就我个人来说，智能配电室对我的意义，不能不说非常重大。 既然如何， 生活中，若智能配电室出现了，我们就不得不考虑它出现了的事实。 现在，解决智能配电室的问题，是非常非常重要的。 所以， 现在，解决智能配电室的问题，是非常非常重要的。 所以， 我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 可是，即使是这样，智能配电室的出现仍然代表了一定的意义。 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 每个人都不得不面对这些问题。 在面对这种问题时， 对我个人而言，智能配电室不仅仅是一个重大的事件，还可能会改变我的人生。 伏尔泰说过一句富有哲理的话，不经巨大的困难，不会有伟大的事业。我希望诸位也能好好地体会这句话。 带着这些问题，我们来审视一下智能配电室。 赫尔普斯说过一句富有哲理的话，有时候读书是一种巧妙地避开思考的方法。这句话语虽然很短，但令我浮想联翩。 问题的关键究竟为何。 '
  const 微电网文本 = '一般来说， 智能微电网，到底应该如何实现。 总结的来说， 所谓智能微电网，关键是智能微电网需要如何写。 我们一般认为，抓住了问题的关键，其他一切则会迎刃而解。 西班牙说过一句富有哲理的话，自知之明是最难得的知识。这句话语虽然很短，但令我浮想联翩。 在这种困难的抉择下，本人思来想去，寝食难安。 一般来讲，我们都必须务必慎重的考虑考虑。 我们不得不面对一个非常尴尬的事实，那就是， 我们不得不面对一个非常尴尬的事实，那就是， 左拉曾经说过，生活的道路一旦选定，就要勇敢地走到底，决不回头。这句话语虽然很短，但令我浮想联翩。 带着这些问题，我们来审视一下智能微电网。 我们都知道，只要有意义，那么就必须慎重考虑。 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 带着这些问题，我们来审视一下智能微电网。 智能微电网因何而发生？ 现在，解决智能微电网的问题，是非常非常重要的。 所以， 这样看来， 一般来说， 黑格尔在不经意间这样说过，只有永远躺在泥坑里的人，才不会再掉进坑里。带着这句话，我们还要更加慎重的审视这个问题： 培根在不经意间这样说过，深窥自己的心，而后发觉一切的奇迹在你自己。带着这句话，我们还要更加慎重的审视这个问题。'

  const 打开精品台区 = windowManagerContext => createWindow(
    windowManagerContext,
    null,
    '精品台区',
    <ScrollArea scroll="y" style={{ width: '100%', height: '100%' }}>
      { 精品台区文本 }
    </ScrollArea>,
    {
      foreColor: 'blue',
      style: { width: '400px', height: '300px' }
    }
  )

  const 打开智能配电室 = windowManagerContext => createWindow(
    windowManagerContext,
    null,
    '智能配电室',
    <ScrollArea scroll="y" style={{ width: '100%', height: '100%' }}>
      { 智能配电文本 }
    </ScrollArea>,
    {
      foreColor: 'blue',
      style: { width: '400px', height: '300px' }
    }
  )

  const 打开智能微电网 = windowManagerContext => createWindow(
    windowManagerContext,
    null,
    '智能微电网',
    <ScrollArea scroll="y" style={{ width: '100%', height: '100%' }}>
      { 微电网文本 }
    </ScrollArea>,
    {
      foreColor: 'blue',
      style: { width: '400px', height: '300px' }
    }
  )

  return (
    <div className="app"
         onDragOver={allowDrop}
         style={{ width: '100%', height: '100%', backgroundColor: getGlobalColor().colorPlate.cyan }}>
      <WindowManager windowList={windowList} setWindowList={setWindowList}>
        <div style={{
          position: 'absolute',
          left: 4,
          top: 4,
          height: 'calc(100vh - 48px)',
          display: 'flex',
          gap: '0.5em',
          flexDirection: 'column',
          flexWrap: 'wrap',
        }}>
          <ItemIcon iconSize={48}
                    icon={netFolderImageUrl}
                    text="精品台区"
                    onUseItem={打开精品台区}/>
          <ItemIcon iconSize={48}
                    icon={briefCaseImageUrl}
                    text="智能配电室"
                    onUseItem={打开智能配电室}/>
          <ItemIcon iconSize={48}
                    icon={explorerImageUrl}
                    text="智能微电网"
                    onUseItem={打开智能微电网} />
          <ItemIcon iconSize={48} icon={consoleImageUrl} text="MS-DOS方式" />
        </div>
        <TaskBar backColor="htmlGray" activeBackColor="white" activeForeColor="black"/>
      </WindowManager>
    </div>
  )
}

export default App
