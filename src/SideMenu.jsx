import React, { Component } from 'react';
import { List, ListHeader, ListItem, Page, Radio } from 'react-onsenui';

export default class SideMenu extends Component {

  state = {
    language: 'EN'
  }

  render() {
    return (
      <Page>
        <List>
          <ListHeader>Information</ListHeader>

          <ListItem modifier='longdivider'>About Us</ListItem>  
          
          <ListItem expandable>
            <label>Projects</label>
            <div className="expandable-content">
              <ListItem>Orthodoxes Wien</ListItem>
              <ListItem>Oberhollabrunn</ListItem>
            </div>
          </ListItem>

          <ListItem modifier='longdivider'>Help</ListItem>
            
          <ListHeader modifier='longdivider'>Walking Tours</ListHeader>

          <ListItem modifier='longdivider'>Oberhollabrunn</ListItem>
            
          <ListHeader modifier='longdivider'>Language</ListHeader>

          <ListItem>
            <label className="left">
              <Radio 
                inputId='EN' 
                name='EN' 
                onChange={() => this.setState({ language: 'EN'})} 
                checked={this.state.language === 'EN'} />
            </label>
            
            <label htmlFor='EN' className="center">
              English
            </label>
          </ListItem>

          <ListItem>
            <label className="left">
              <Radio 
                inputId='DE' 
                name='DE' 
                onChange={() => this.setState({ language: 'DE'})} 
                checked={this.state.language === 'DE'} />
            </label>
            
            <label htmlFor='DE' className="center">
              Deutsch
            </label>
          </ListItem>
        </List>
      </Page>
    )
  }

}