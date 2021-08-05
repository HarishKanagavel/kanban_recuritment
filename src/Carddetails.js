import { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import Styles from './styles/Carddetails.module.css';


const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    background: isDragging ? 'lightgreen' : '#f0f0f0',

    ...draggableStyle
});

const grid = 2;

class Carddetails extends Component{
    render(){
        const {data} = this.props;
        return(
                data.map((Element, index)=>{
                return(
                    <Draggable key={Element.id} draggableId={Element.id} index={index}>
                    {(provided,snapshot) => (
                    <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                    )}>
                        <div className={Styles.card1} key={Element.id}>
                        <div className={Styles.row1}>#{Element.num} <button  className={Styles.resp}>Response due</button></div>
                        <div className={Styles.order}>Order No: #{Element.orderno}</div>
                        <div className={Styles.dishes}>{Element.order}</div>
                        <div className={Styles.last}>
                        <div className={Styles.date}>Due:  {Element.data}</div>
                        <div className={Styles.date}>Assigned to<span className={Styles.dot}></span></div>
                        <div>
                        </div>
                        </div>
                        </div>
                    </div>
                    )}
                    </Draggable>
                );
                })
        );
    }
}
export default Carddetails; 