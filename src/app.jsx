import React from 'react'

import './chui-style.css'
import Window from './chui-components/window.jsx'
import LineEdit from './chui-components/line-edit.jsx'
import Button from './chui-components/button.jsx'
import { HSpacer, VSpacer } from './chui-components/spacer.jsx'
import TextArea from './chui-components/text-area.jsx'
import ScrollArea from './chui-components/scroll-area.jsx'

const allowDrop = event => {
  event.preventDefault()
  // eslint-disable-next-line no-param-reassign
  event.dataTransfer.dropEffect = 'move'
}

const text = '海贝尔在不经意间这样说过，人生就是学校。在那里，与其说好的教师是幸福，不如说好的教师是不幸。这启发了我， 那么， 叔本华在不经意间这样说过，意志是一个强壮的盲人，倚靠在明眼的跛子肩上。这启发了我， 对我个人而言，我太菜了不仅仅是一个重大的事件，还可能会改变我的人生。 这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 既然如此， 在这种困难的抉择下，本人思来想去，寝食难安。 我太菜了，发生了会如何，不发生又会如何。 生活中，若我太菜了出现了，我们就不得不考虑它出现了的事实。 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 这样看来， 从这个角度来看， 既然如此， 现在，解决我太菜了的问题，是非常非常重要的。 所以， 生活中，若我太菜了出现了，我们就不得不考虑它出现了的事实。 易卜生曾经提到过，伟大的事业，需要决心，能力，组织和责任感。这句话语虽然很短，但令我浮想联翩。 我太菜了的发生，到底需要如何做到，不我太菜了的发生，又会如何产生。 一般来讲，我们都必须务必慎重的考虑考虑。 既然如何， 我太菜了因何而发生？ 就我个人来说，我太菜了对我的意义，不能不说非常重大。 王阳明曾经提到过，故立志者，为学之心也；为学者，立志之事也。我希望诸位也能好好地体会这句话。 要想清楚，我太菜了，到底是一种怎么样的存在。 经过上述讨论， 一般来讲，我们都必须务必慎重的考虑考虑。 而这些并不是完全重要，更加重要的问题是， 我们都知道，只要有意义，那么就必须慎重考虑。 培根曾经提到过，深窥自己的心，而后发觉一切的奇迹在你自己。带着这句话，我们还要更加慎重的审视这个问题： 普列姆昌德说过一句富有哲理的话，希望的灯一旦熄灭，生活刹那间变成了一片黑暗。这不禁令我深思。 那么。 '

const App = () => (
  <div className="app"
       onDragOver={allowDrop}
       style={{ width: '100%', height: '95vh', border: '1px solid black' }}>
    <Window hWnd="readBlog"
            title="Read blog: 我太菜了 by Chuigda WhiteGive"
            style={{ width: '600px' }}
            foreColor="blue">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ScrollArea style={{ height: '200px', width: '100%' }} scroll="y">{text}</ScrollArea>
        <hr style={{ width: '100%' }} />
        <ScrollArea scroll="y" style={{
          height: '150px',
          width: '100%',
          padding: '4px'
        }}>
          <div style={{ width: '100%' }}>
            Comment from <b>Ivan Ivanovich</b>:<br/>
            禁止卖弱，打死
          </div>
          <hr/>
          <div style={{ width: '100%' }}>
            Comment from <b>Ivan Ivanovich</b>:<br/>
            禁止卖弱，打死
          </div>
          <hr/>
          <div style={{ width: '100%' }}>
            Comment from <b>Ivan Ivanovich</b>:<br/>
            禁止卖弱，打死
          </div>
          <hr/>
          <div style={{ width: '100%' }}>
            Comment from <b>Ivan Ivanovich</b>:<br/>
            禁止卖弱，打死
          </div>
          <hr/>
          <div style={{ width: '100%' }}>
            Comment from <b>Ivan Ivanovich</b>:<br/>
            禁止卖弱，打死
          </div>
        </ScrollArea>
        <hr style={{ width: '100%' }}/>
        <TextArea style={{ width: '100%', height: '150px' }} placeholder="your comment"/>
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
    </Window>
  </div>
)

export default App
