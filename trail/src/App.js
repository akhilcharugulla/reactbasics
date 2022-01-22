import './App.css';
import Myfirstclass from './mycomponents/Myfirstclass';
import FunctionalComp from './mycomponents/FunctionalComp';
import Secondclass from './mycomponents/Secondclass';
import Myfirstcounter from './mycomponents/Myfirstcounter'
import EventHandlingFunctionalComp from './mycomponents/EventHandlingFunctionalComp'
import EventHandlingClassComp from './mycomponents/EventHandlingClassComp'
import Parentakh from './mycomponents/Parentakh'
import Listrendering from './mycomponents/Listrendering'
import Style  from './mycomponents/Style';
import Akhform from './mycomponents/Akhform';
import Tablecomponent from './mycomponents/Tablecomponent';
import CreatingRefs from './mycomponents/CreatingRefs';
import Clickcounter from './mycomponents/Clickcounter';
import Hovercounter from './mycomponents/Hovercounter';
import Compc from './mycomponents/Compc';
import {Abcprovider} from './mycomponents/Akhcontext';
import Myfirstget from './mycomponents/Myfirstget';
import Myfirstpost from './mycomponents/Myfirstpost';
import Myfirsthookcounter from './myHookcomponents/Myfirsthookcounter';
import Counterincrdecrreset from './myHookcomponents/Counterincrdecrreset'
import Objectsinusestate from './myHookcomponents/Objectsinusestate';
import ArraysinHook from './myHookcomponents/ArraysinHook';
function App() {
  return (
    <div className="App">
       {/* <Myfirstclass/>
      <FunctionalComp/>
      <FunctionalComp name="joker" firstname="sam" lastname="harry"/>
      <FunctionalComp name="bruce" firstname ="tom" lastname="hermoine"/>
      <FunctionalComp name="batman" firstname="ron" lastname="weasley">
      <p>I am a child component hahahaha & render only for ron weasly</p>
      </FunctionalComp> */}

      {/* <Myfirstclass name="qweerty" firstname="keyboard" lastname="dell"/>
      <Myfirstclass name="ac087214" firstname="akhil" lastname="charugulla">
        <h6>I am child for class component</h6>
      </Myfirstclass>  */}

      {/* <Secondclass/>
      <br/>
      <Myfirstcounter/> */}

      {/* <EventHandlingFunctionalComp>

      </EventHandlingFunctionalComp>
      <EventHandlingClassComp/> */}
      {/* <Parentakh/> */}
      {/* <Listrendering/> */}

      {/* <Style/>
      <Akhform/>
      <Tablecomponent/>
      <CreatingRefs/>
      <Clickcounter/>
      <Hovercounter surname="Charugulla"/>
      <Abcprovider value="cuty">
      <Compc/>
      </Abcprovider>
      <Myfirstget/>
      <Myfirstpost/> */}

      
      <Myfirsthookcounter/>
      <Counterincrdecrreset/>
      <Objectsinusestate/>
      <ArraysinHook/>
    </div>
  );
}
export default App;
