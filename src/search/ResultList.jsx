import React from 'react';
import { FixedSizeList as List } from 'react-window';
import { Icon, Ripple } from 'react-onsenui';
import AutoSizer from 'react-virtualized-auto-sizer';

import './ResultList.scss';

const ICONS = {
  'crm:E18 Physical Thing': 'md-pin',
  'crm:E21 Person': 'md-account',
  'crm:E74 Group': 'md-accounts'
}

const ResultList = props => {

  const Row = ({ index, style }) => {
    const item = props.results[index];

    return (<div 
      className="search-result" 
      style={style}
      onClick={() => props.onSelect(props.results[index])}>

      <Ripple modifier="light-gray" />

      <Icon icon={ICONS[item.crmClass]} />

      <label>{item.properties.title}</label>
    </div>)
  }

  return (
    <div className="search-results">
      <AutoSizer>
        {({ height, width}) => (
          <List 
            height={height}
            itemCount={props.results.length}
            itemSize={58}
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