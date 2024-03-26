
import { CORE_CONCEPTS } from './components/CoreConcept.jsx';
import {useState} from 'react'
import { Header } from './components/Header/Header.jsx';
import { CoreConcept } from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';



function App() { 
  // within a useState that is ui intial value
  //first time if it's exucute then it's our intial value then updated value
  // const [selectedTopic,setSelectedTopic] = useState('Please click a button') 
  const [selectedTopic,setSelectedTopic] = useState() 
  // let tabContent = 'Please click button';
  function handleSelect(selectedButton){
    // tabContent = selectedButton
    setSelectedTopic(selectedButton)
    // selected topic give us previous updated vlaue
    console.log(selectedTopic)
  }

  let tabContent = <p>Please Select a Topic.</p>
  if(selectedTopic){
   tabContent = (<div id='tab-content'><h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
            </div>)
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => 
            // key for give uniquily identfication
            (<CoreConcept key = {conceptItem.title} {...conceptItem}/>))}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id='examples'>
          <h2>Example</h2>
          <menu>
              <TabButton
               isSelected={selectedTopic === 'components'}
                onSelect={()=>handleSelect('components')}>
                  Component
              </TabButton>
              <TabButton 
              isSelected={selectedTopic === 'jsx'}
              onSelect={()=>handleSelect('jsx')}>
                JSX
              </TabButton>
              <TabButton 
              isSelected={selectedTopic === 'props'}
              onSelect={()=>handleSelect('props')
              }>
                Props
              </TabButton>
              <TabButton 
              onSelect={()=>handleSelect('state')}
              isSelected={selectedTopic === 'state'}
              >
                State
              </TabButton>
          </menu>
            {/* check whether selectedTopic is selected or not */}
           {/* {!selectedTopic ? (<p>Please Select a Topic.</p>) : ( <div id='tab-content'><h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
            </div>
          )
          } */}
          {/* we can also able to do shortcircuit  */}
          {tabContent}
        </section>
      </main>
    
    </div>
  );
}

export default App;
