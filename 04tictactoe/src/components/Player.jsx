import { useState } from 'react';

export default function Player({ initialName, symbol,isActive}) {
  const [playerName,setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // the arrow function take previous value 
    setIsEditing((editing)=>!editing);
  }

  // event is for the onChange any event occur then
  function handleChange(event){
    // console.log(event)
    // .target means that point wher event occure and value fatch that particular tag in which event occur 
    setPlayerName(event.target.value)
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = 'Edit';

  if (isEditing) {
    // onchange field take the current value of that button changeble by user
    editablePlayerName = <input type="text" required  value={playerName} onChange={handleChange}/>
    // btnCaption = 'Save';
  }

  return (
    <li className={isActive ? 'active':undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
