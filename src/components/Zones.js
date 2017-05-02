import React, {Component} from 'react'
import Zone from './Zone'

class Zones extends Component {
     constructor(){
        super()
        this.state= {
            list: [
                {name:'Zone1',zipCode:'101', numComments:10},
                {name:'Zon2',zipCode:'102', numComments:20},
                {name:'Zone3',zipCode:'103', numComments:30}
            ]
        }
            
     }

    render() {
        const listItems = this.state.list.map(function(i, index) {
            return (
                <li><Zone key={i.toString()} currentZone={i} /></li>
            )
        })
        return (
            <div>
                <ol>
                    {listItems}
                </ol>  
            </div>
        )
    }

}

const styles = {
    zones: {
        background: '#D8D3D3',
        paddingLeft: 3,
        margin:5,
        border: '1px solid #EEDFDF'
    },
    comments: {
        background: '#EEDFDF',
        padding: 3,
        margin:5,
        border: '1px solid #D8D3D3'
    }

}

export default Zones


