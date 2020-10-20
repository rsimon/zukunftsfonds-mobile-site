import React, { Component } from 'react';
import { Icon, List, ListHeader, ListItem, Page, Radio } from 'react-onsenui';

import './SideMenu.scss';

export default class SideMenu extends Component {

  state = {
    language: 'EN'
  }

  render() {
    return (
      <Page className="side-menu">
        <List>
          <ListItem>
            <Icon icon="md-search" />
            <label>Suche</label>
          </ListItem>
        </List>

        <List>
          <ListHeader>
            <Icon icon="md-info-outline" />
            <label>Information</label>
          </ListHeader>

          <ListItem>Help</ListItem>  

          <ListItem className="projects">
            <div>
              <label>Projects</label>
              <ul>
                <li>Orthodoxes Wien</li>
                <li>Oberhollabrunn</li>
              </ul>
            </div>
          </ListItem>
          
          <ListItem>About Us</ListItem>
        </List>
        
        <List>
          <ListHeader>
            <Icon icon="md-walk" />
            <label>Walking Tours</label>
          </ListHeader>
          
          <ListItem>Oberhollabrunn</ListItem>
        </List>

        <List className="set-language">
          <ListHeader>
            <Icon icon="md-translate" />
            <label>Language</label>
          </ListHeader>
          
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