import React, { ReactNode, ReactElement } from 'react';

export interface Props {
  titles: string[];
  children: ReactElement[]
}

const tabStyle: React.CSSProperties = { cursor: "pointer", color: "gray" };
const tabSelectedStyle: React.CSSProperties = { cursor: "pointer", color: "black" };

const SimpleTab: React.FC<Props> = ({ titles, children }: Props) => {
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
      {children[index]}
    </div>
  )
}

export default SimpleTab;