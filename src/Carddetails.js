import { Component } from "react";
import { Button } from "semantic-ui-react";
import Styles from './styles/Carddetails.module.css';

class Carddetails extends Component{
    constructor(props){
    super(props);

}
    render(){
        const {data} = this.props;
        return(
            <div className={Styles.cardd}> 
            {
                data.map((Element, index)=>{
                return(
                    <div className={Styles.card} key={index}>
                        <div className={Styles.card1} key={index}>
                        <div className={Styles.row1}>#{Element.num} <button  className={Styles.resp}>Response due</button></div>
                        <div className={Styles.order}>Order No: #{Element.orderno}</div>
                        <div className={Styles.dishes}>{Element.order}</div>
                        <div className={Styles.last}>
                        <div className={Styles.date}>Due:  {Element.data}</div>
                        <div className={Styles.date}>Assigned to</div><span className={Styles.dot}></span>
                        <div>
                        </div>
                        </div>
                        </div>
                    </div>
                );
                })
            }
        </div>
        );
    }
}
export default Carddetails; 