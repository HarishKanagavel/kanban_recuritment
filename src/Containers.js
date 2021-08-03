import { Component } from "react";
import { Container, Grid, Card } from 'semantic-ui-react';
import Styles from './styles/Containers.module.css';
import Carddetails from './Carddetails';

class Containers extends Component{

    render(){
        const received = [
            {
              num: '23',
              order: 'Paratha side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos)',
              data: 'May 31, 2019 3.39 PM',
              orderno: '204',
            },
            {
                num: '24',
                order: 'Paratha side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos)',
                data: 'May 31, 2019 3.39 PM',
                orderno: '204',
            },
            {
                num: '25',
                order: 'Paratha side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos)',
                data: 'May 31, 2019 3.39 PM',
                orderno: '204',
            },
            {
                num: '25',
                order: 'Paratha side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos)',
                data: 'May 31, 2019 3.39 PM',
                orderno: '204',
            },
            {
                num: '25',
                order: 'Paratha side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos)',
                data: 'May 31, 2019 3.39 PM',
                orderno: '204',
            },
          ]
          const ready = [
          ];
          const inprogress = [
            {
                num: '25',
                order: 'Paratha side Dish (2 Nos), Plain Dosa, Podi Ghee Dosa (1 Nos), Butter Roti (5 Nos)',
                data: 'May 31, 2019 3.39 PM',
                orderno: '204',
            }
          ];
          const picked = [];
        return(
            <div className={Styles.contain}>
                {/* <Container> */}
                <Grid>
                    <Grid.Row columns={4} className={Styles.maingrid}>
                    <Grid.Column  className={Styles.grid} mobile={16} tablet={8} computer={4}>
                        <div className = {Styles.Column}>
                            <div className = {Styles.header}><b>RECEIVED ORDERS</b></div>
                            <div>
                                <Carddetails
                                data = {received}/>
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column  className={Styles.grid} mobile={16} tablet={8} computer={4}>
                        <div className = {Styles.Column}>
                            <div className = {Styles.header}><b>ORDER IN PROGRESS</b></div>
                            <div>
                                <Carddetails
                                data = {inprogress}/>
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column  className={Styles.grid} mobile={16} tablet={8} computer={4}>
                        <div className = {Styles.Column}>
                            <div className = {Styles.header}><b>ORDER IS READY FOR DELIVERY</b></div>
                            <div>
                                <Carddetails
                                data = {ready}/>
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column  className={Styles.grid} mobile={16} tablet={8} computer={4}>
                        <div className = {Styles.Column}>
                            <div className = {Styles.header}><b>ORDER PICKED UP</b></div>
                            <div className={Styles.carddetails}>
                                <Carddetails
                                data = {picked}/>
                            </div>    
                        </div>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
                {/* </Container>                 */}
            </div>
        );
    }
}
export default Containers;
