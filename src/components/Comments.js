import React, {Component} from 'react'
import Comment from './Comment'
import styles from './styles'

class Comments extends Component {
    constructor(){
        super()
        this.state= {
            list: [
                {username:'yagensh1', body:'dasdasad', timestamp: '11:45'},
                {username:'yagensh', body:'dasdasad', timestamp: '12:45'},
                {username:'yagensh3', body:'dasdasad', timestamp: '15:45'}
            ]
        }

    }

    render() {
        const listItems = this.state.list.map(function(i, index) {
            return (
                <li><Comment key={i.toString()} currentComment={i} /></li>
            )
        })
        return (            
            <div style={styles.comment.commentBox}>
                <ul style={styles.comment.commeneList}>
                    {listItems}
                </ul>
            </div>
        )
    }

}

export default Comments


