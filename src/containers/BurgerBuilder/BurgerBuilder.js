import React,{ Component} from 'react';
import Auxillary from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    // state = {
    //     ingredients: {
    //         salad: 0,
    //         bacon: 0,
    //         cheese: 0,
    //         meat: 0
    //     }
    // }


    render () {
        return (
            <Auxillary>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Auxillary>
        );
    }
}

export default BurgerBuilder;