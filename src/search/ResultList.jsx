import React from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

const ResultList = props => {

  const onSelect = result => {
    console.log(result);
  }

  const Row = ({ index, style }) =>
    <div 
      className="search-result" 
      style={style}
      onClick={() => onSelect(props.results[index])}>

      {props.results[index].properties.title}
    </div>

  return (
    <div className="search-results">
      <AutoSizer>
        {({ height, width}) => (
          <List 
            height={height}
            itemCount={props.results.length}
            itemSize={35}
            width={width}>
            {Row}
          </List>
          )
        }
      </AutoSizer>
    </div>
  )

}

export default ResultList;