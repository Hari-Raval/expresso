import React from 'react';
import { Grid, Item, Header } from 'semantic-ui-react';

import * as cappuccino from '../Assets/cappuccino.jpeg';
import * as coffee from '../Assets/coffee.jpeg';
import * as latte from '../Assets/latte.jpeg';
import { getOrderInfo, postMakeOrder } from '../Axios/axios_getter';

class MenuBar extends React.Component {

  handleItemClick = (e) => {

    getOrderInfo('orderid')
    .then(orderid => {
      const nextid = orderid + 1;
      const update = {
         items: ['Latte'],
         quantity: '1',
         orderid: nextid
       };
      postMakeOrder(update);
    })
    .catch(error => {
      const firstOrder = {
        items: ['Latte'],
        quantity: '1',
        orderid: 1
      };
      postMakeOrder(firstOrder);
    });

  }

  render() {

    {/* Pull images from database */}
    return (
      <Grid>
        <Grid.Row>
          <Header style={{ 'font-size': '2em' }}>
            {this.props.title}
          </Header>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={15}>

            <Item.Group>

              <Item>
                <Item.Image src={coffee} />

                <Item.Content verticalAlign='middle'>
                  <Item.Header as='a'>Hot Coffee</Item.Header>
                  <Item.Meta>Not your everyday cup of Joe.</Item.Meta>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image src={cappuccino} />

                <Item.Content verticalAlign='middle'>
                  <Item.Header as='a'>Cappuccino</Item.Header>
                  <Item.Meta>Imported from Italy.</Item.Meta>
                </Item.Content>
              </Item>

              <Item>
                <Item.Image src={latte} />

                <Item.Content verticalAlign='middle'>
                  <Item.Header as='a' onClick={this.handleItemClick}>Latte</Item.Header>
                  <Item.Meta>Extra milk. Extremely rich.</Item.Meta>
                </Item.Content>
              </Item>
            </Item.Group>

            <div style={{ height: '2em' }} />

          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default MenuBar;
