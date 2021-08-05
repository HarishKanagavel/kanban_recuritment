import { Component } from "react";
import { Grid } from 'semantic-ui-react';
import Styles from './styles/Containers.module.css';
import Carddetails from './Carddetails';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    console.log(Array.from(destination));
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 8;

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : '#f0f0f0',
    padding: grid,
    margin: `0 0 ${grid}px 0`,
});

class Containers extends Component{
    constructor(){
    super();
    this.state = {
        items : [
            {
              id: '1',
              num: '26',
              order: 'Paratha side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos)',
              data: 'May 31, 2019 3.39 PM',
              orderno: '45',
            },
            {
                id: '2',
                num: '25',
                order: 'Paratha side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos)',
                data: 'May 29, 2019 10.37 AM',
                orderno: '201',
            },
            {
                id: '3',
                num: '24',
                order: 'Paratha side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos)',
                data: 'May 31, 2019 3.36 PM',
                orderno: '1',
            },
            {
                num: '23',
                id: '4',
                order: 'Paratha side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos)',
                data: 'May 31, 2019 3.35 PM',
                orderno: '600',
            },
            {
                id: '5',
                num: '27',
                order: 'Paratha side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos)',
                data: 'May 31, 2019 3.30 PM',
                orderno: '202',
            },
          ],
          selected : [
            {
                id: '6',
                num: '27',
                order: 'Paratha side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos)',
                data: 'May 31, 2019 3.40 PM',
                orderno: '456',
            }
        ],
        ready : [
            {
                id: '7',
                num: '28',
                order: 'Paratha side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos)',
                data: 'May 31, 2019 3.40 PM',
                orderno: '600',
            }
        ],
        picked : [
            {
                id: '8',
                num: '29',
                order: 'Paratha side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos)',
                data: 'May 31, 2019 3.40 PM',
                orderno: '450',
            }
        ]
    };
    this.onDragEnd=this.onDragEnd.bind(this);
    }

    id2List = {
        droppable: 'items',
        droppable2: 'selected',
        droppable3: 'ready',
        droppable4: 'picked'
    };

    getList = id => this.state[this.id2List[id]];


    onDragEnd = result => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let states = { items };

            if (source.droppableId === 'droppable2') {
                states = { selected: items };
            }

            if(source.droppableId === 'droppable3') {
                states = { ready: items };
            }

            if(source.droppableId === 'droppable4') {
                states = { picked: items };
            }

            this.setState(states);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );
            
            var arr = ['droppable','droppable2','droppable3','droppable4'];
            var keys = Object.keys(result);
            var indexs = [];
            for(let i=0;i<keys.length;i++){
                indexs.push(arr.indexOf(keys[i])); 
            }
            indexs.sort((a, b) => a - b);
            for(let i = indexs.length -1; i >= 0; i--){
                arr.splice(indexs[i],1); 
            }
            for(let i=0;i<arr.length;i++){
                if(arr[i]==='droppable') {
                    result.droppable = this.state.items;
                }
                if(arr[i]==='droppable2') {
                    result.droppable2 = this.state.selected;
                }
                if(arr[i]==='droppable3') {
                    result.droppable3 = this.state.ready;
                }
                if(arr[i]==='droppable4') {
                    result.droppable4 = this.state.picked;
                }
            }
            this.setState({
                items: result.droppable,
                selected: result.droppable2,
                ready: result.droppable3,
                picked: result.droppable4
            });
        }
    };

    render(){
        const {items, selected, ready, picked} = this.state;
        return(
            <div className={Styles.contain}>
                <Grid>
                    <Grid.Row columns={4} className={Styles.maingrid}>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                    <Grid.Column  className={Styles.grid} mobile={16} tablet={8} computer={4}>
                    <Droppable droppableId="droppable">
                             {(provided, snapshot) => (
                            <div  
                            style={getListStyle(snapshot.isDraggingOver)}
                            ref={provided.innerRef}>
                        <div className = {Styles.Column}>
                            <div className = {Styles.header}><b>RECEIVED ORDERS ({items.length})</b></div>
                                <Carddetails
                                data = {items}>
                                </Carddetails>
                                {provided.placeholder}
                            </div>
                        </div>
                        )}
                        </Droppable>
                    </Grid.Column>
                     <Grid.Column  className={Styles.grid} mobile={16} tablet={8} computer={4}>
                     <Droppable droppableId="droppable2">
                             {(provided,snapshot) => (
                            <div  
                            style={getListStyle(snapshot.isDraggingOver)}
                            {...provided.droppableProps}
                            ref={provided.innerRef}>
                        <div className = {Styles.Column}>
                            <div className = {Styles.header}><b>ORDER IN PROGRESS ({selected.length})</b></div>
                                <Carddetails
                                data = {selected}>
                                </Carddetails>
                                {provided.placeholder}
                            </div>
                        </div>
                        )}
                        </Droppable>
                    </Grid.Column>
                    <Grid.Column  className={Styles.grid} mobile={16} tablet={8} computer={4}>
                    <Droppable droppableId="droppable3">
                             {(provided,snapshot) => (
                            <div  
                            style={getListStyle(snapshot.isDraggingOver)}
                            {...provided.droppableProps}
                            ref={provided.innerRef}>
                        <div className = {Styles.Column}>
                            <div className = {Styles.header}><b>ORDER IS READY FOR DELIVERY ({ready.length})</b></div>
                                <Carddetails
                                data = {ready}>
                                </Carddetails>
                                {provided.placeholder}
                            </div>
                        </div>
                        )}
                        </Droppable>
                    </Grid.Column>
                    <Grid.Column  className={Styles.grid} mobile={16} tablet={8} computer={4}>
                    <Droppable droppableId="droppable4">
                             {(provided,snapshot) => (
                            <div  
                            style={getListStyle(snapshot.isDraggingOver)}
                            {...provided.droppableProps}
                            ref={provided.innerRef}>
                        <div className = {Styles.Column}>
                            <div className = {Styles.header}><b>ORDER PICKED UP ({picked.length})</b></div>
                                <Carddetails
                                data = {picked}>
                                </Carddetails>
                                {provided.placeholder}
                            </div>    
                        </div>
                        )}
                        </Droppable>
                    </Grid.Column>
                    </DragDropContext>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
export default Containers;
