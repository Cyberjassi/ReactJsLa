import React from 'react'

// export default function TabButton(props) {
//   return (
//     <li>
//       {/* by default we have children props */}
//         <button>{props.children}</button>
//     </li>
//   )
// }
export default function TabButton({children,onSelect,isSelected}) {
  // function HandleClick(){
  //   console.log("click")
  // }
  return (
    <li>
      {/* by default we have children props */}
        <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
  )
}
