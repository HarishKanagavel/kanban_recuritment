import { Component } from "react";
import { Icon, button, Search } from 'semantic-ui-react';
import Styles from './styles/Editor.module.css';
import Containers from './Containers';


class Editor extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
            <div className={Styles.header}>
                <div className={Styles.left}>
                <div className={Styles.label}>Tickets</div>
                <button className={Styles.button} >ALL</button>
                <button className={Styles.button} >ONLY MY TICKETS</button>
                <button className={Styles.button} >RECENTLY UPDATED</button>
                <button className={Styles.button} ><Icon name='filter'/></button>
                <button className={Styles.button} ><Icon name='refresh'/></button>
                </div>
                <div className={Styles.right}>
                  <div className={Styles.label}><Search className={Styles.search}/></div>  
                <button className={Styles.button} ><Icon name='setting'/>Configuration</button>
                <div className={Styles.label}>(0-30)</div>
                <button className={Styles.button} ><Icon name='angle left'/></button>
                <button className={Styles.button} ><Icon name='angle right'/></button>
                </div>
            </div>
            <Containers/>
            </div>
        );
    }
}
export default Editor;