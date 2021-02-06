import React, { Component } from "react";
import { Input, Button, List } from 'antd';
import store from './redux/store';
import {
  getActionChangeInputValue,
  getActionAddTodoItem,
  getActionDeleteTodoItem
} from './redux/actionCreators';

class App extends Component {
  constructor(props) {
    super(props);
    store.subscribe(this.handleStoreChange);
  }
  state = store.getState();
  handleInputChange = (e) => {
    const action = getActionChangeInputValue(e.target.value)
    store.dispatch(action);
  }
  handleStoreChange = () => {
    this.setState(store.getState());
  }
  handleBtnClick = () => {
    const action = getActionAddTodoItem();
    store.dispatch(action);
  }
  handleItemDelete = (index) => {
    const action = getActionDeleteTodoItem(index);
    store.dispatch(action);
  }
  render() {
    return (
      <div style={{
        margin: 10,
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
          <Input
            placeholder="todo info"
            style={{
              marginRight: 10,
              width: 300,
            }}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <Button
            type="primary"
            onClick={this.handleBtnClick}
          >提交</Button>
        </div>
        <List
          style={{
            width: 300,
            marginTop: 10,
          }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                this.handleItemDelete(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default App;
