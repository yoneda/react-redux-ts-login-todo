import React from 'react';

export interface Props {
  titles: string[];
  elements: React.ReactElement[];
}

const tabStyle: React.CSSProperties = { cursor: "pointer", color: "gray" };
const tabSelectedStyle: React.CSSProperties = { cursor: "pointer", color: "black" };

const SimpleTab: React.FC<Props> = ({ titles, elements }: Props) => {
  const [index, setIndex] = React.useState(0);
  return (
    <div>
      {
        titles.map((title,key)=>(
          <span key={key}>
            <span
              style={key===index?tabSelectedStyle:tabStyle}
              onClick={()=>setIndex(key)}>
              {title}
            </span>
            {" "}
          </span>
        ))
      }
      {elements[index]}
    </div>
  )
}

export default SimpleTab;