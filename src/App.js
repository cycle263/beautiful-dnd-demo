import React, { Component } from 'react';
import { Icon, Input, Tooltip, Radio, Popconfirm } from 'antd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { relationDatas, whetherOpts } from './utils/mock';
import logo from './logo.svg';
import './App.css';

const RadioGroup = Radio.Group;

// list交换位置
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  padding: grid * 2,
  background: isDragging ? 'lightgreen' : 'white',
  ...draggableStyle,
});
const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'white'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    if (!result.destination)  return;
    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );
    this.setState({ items });
  }

  render() {
    const DataItems = relationDatas && relationDatas.map((item, i) => {
      const index = i;
      return (
        <Draggable key={item.dataKeyDesc} draggableId={item.dataKeyDesc} index={index}>
          {(provided, snapshot) => (
            <div>
              <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                style={getItemStyle(
                  snapshot.isDragging,
                  provided.draggableProps.style,
                )}>
                <div className="data-item">
                  <label>
                    <Popconfirm key="4" title="确定删除这条数据吗？" onConfirm={() => this.delDataKey(i, 'datas')}>
                      <Icon type="delete" />
                    </Popconfirm>
                    数据{i + 1}：
                  </label>
                  <div className="data-content">
                    <div className="data-inputs">
                      <label><span>数据名称 <Tooltip title="一类数据的名称，可输入任意字符，如：已标注数据">
                        <Icon type="question-circle-o" />
                      </Tooltip>：</span><Input /></label>
                      <label><span>数据类别标识符：</span><RadioGroup options={whetherOpts} /></label>
                      <label><span>数据类型：</span><Input /></label>
                    </div>
                    <div className="data-inputs">
                      {item.dataKey === 'labeling_file' && <label><span>是否打标：</span><RadioGroup options={whetherOpts} /></label>}
                      <label><span>是否必传 <Tooltip title="训练时是否必须使用">
                        <Icon type="question-circle-o" />
                      </Tooltip>：</span><RadioGroup options={whetherOpts} /></label>
                    </div>
                  </div>
                </div>
              </div>
              {provided.placeholder}
            </div>
          )}
        </Draggable>
      )
    });
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                {DataItems}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
}

export default App;
