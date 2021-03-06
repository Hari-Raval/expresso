import React from 'react';
import { Card, Header, Grid, Button, Radio, Checkbox, Form, Item } from 'semantic-ui-react';


class ItemPopUp extends React.Component {

  state = {
    sizePrice: this.props.item.sp[0],
    finalOrder: { item: this.props.item, sp: this.props.item.sp[0], addons: [] },
    totalPrice: Number(this.props.item.sp[0][1])
  }

  getPrice = async () => {
    let price = Number(this.state.finalOrder.sp[1]);
    for (let i = 0; i < this.state.finalOrder.addons.length; i++) {
      price += Number(this.state.finalOrder.addons[i].price);
    }
    await this.setState({ totalPrice: price });
  }

  selectSize = async (sizePrice) => {
    await this.setState({ sizePrice: sizePrice });
    await this.setState(prevState => {
      let finalOrder = { ...prevState.finalOrder };
      finalOrder.sp = sizePrice;
      return { finalOrder }
    });
    this.getPrice();
  }

  addAddon = (addon) => {
    this.setState(prevState => {
      let finalOrder = { ...prevState.finalOrder };
      finalOrder.addons.push(addon);
      return { finalOrder }
    });
  }

  deleteAddon = (addon) => {
    this.setState(prevState => {
      let finalOrder = { ...prevState.finalOrder };
      finalOrder.addons = finalOrder.addons.filter(item => item.name !== addon.name);
      return { finalOrder }
    });
  }

  handleAddon = async (addon) => {
    let checked = false;
    for (let i = 0; i < this.state.finalOrder.addons.length; i++) {
      if (addon.name === this.state.finalOrder.addons[i].name) checked = true;
    }
    if (checked) {
      await this.deleteAddon(addon);
    }
    else {
      await this.addAddon(addon);
    }
    this.getPrice();
  }

  render() {

    const { item } = this.props;

    return (
      <React.Fragment>
        <Card fluid>
          <Card.Content>
            <Grid stackable>
              <Grid.Row textAlign='right'>
                <Grid.Column>
                  <Button circular icon='close' size='medium' floated='right' onClick={this.props.handleclose}/>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width='3'>
                </Grid.Column>
                <Grid.Column width='10'>
                  <Item.Group>
                    <Item>
                      <Item.Image src={this.props.item.image} />

                      <Item.Content verticalAlign='middle'>
                        <Item.Header as='a'>{this.props.item.name}</Item.Header>
                        <Item.Meta>{this.props.item.description}</Item.Meta>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Grid.Column>
                <Grid.Column width='3'>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
          <Card.Content>
            <Grid stackable>
              <Grid.Row>
                <Grid.Column width='4'>
                </Grid.Column>
                <Grid.Column width='8' textAlign='left'>
                  <Header as='h3'
                    style={{fontFamily:'Didot', fontStyle:'italic', color:'black'}}>
                    <span> 01. &nbsp; Size</span>
                  </Header>
                  <Form>
                    {item.sp.map(sizePrice => {
                      return (
                        <Form.Field key={sizePrice[0]}>
                          <Radio
                            id={sizePrice[0]}
                            label={sizePrice[0] + " ($" + Number(sizePrice[1]).toFixed(2) + ")"}
                            name='size'
                            checked={this.state.sizePrice[0] === sizePrice[0]}
                            onChange={() => this.selectSize(sizePrice)} />
                        </Form.Field>
                      )
                    })}
                  </Form>
                </Grid.Column>
                <Grid.Column width='4'>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width='4'>
                </Grid.Column>
                <Grid.Column width='8' textAlign='left'>
                  <Header as='h3'
                    style={{fontFamily:'Didot', fontStyle:'italic', color:'black'}}>
                    <span> 02. &nbsp; Add-Ons</span>
                  </Header>
                  <Form>
                    {this.props.item.addons.map(add => {
                      return (
                        <Form.Field key={add.name}>
                          <Checkbox
                            disabled={!add.availability}
                            id={add.name}
                            label={add.availability ? add.name + " (+ $" + Number(add.price).toFixed(2) + ")" : add.name + " (+ $" + Number(add.price).toFixed(2) + ") ??? Out of Stock"}
                            name='add'
                            onClick={() => this.handleAddon(add)} />
                        </Form.Field>
                      )
                    })}
                  </Form>
                </Grid.Column>
                <Grid.Column width='4'>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
          <Card.Content>
            <Grid stackable padded>
              <Grid.Row>
                <Grid.Column width='4'>
                </Grid.Column>
                <Grid.Column width='4' textAlign='left' verticalAlign='middle'>
                  <Header as='h3' color='grey'>{"$" + this.state.totalPrice.toFixed(2)}</Header>
                </Grid.Column>
                <Grid.Column width='4' textAlign='center' verticalAlign='middle'>
                  <Button style={{backgroundColor: '#EDAC86'}} onClick={() => this.props.handleItemSubmit(this.state.finalOrder)}>
                    ADD ITEM
                  </Button>
                </Grid.Column>
                <Grid.Column width='4'>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      </React.Fragment>

    );
  }
}

export default ItemPopUp;
