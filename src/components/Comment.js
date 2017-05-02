import React, {Component} from 'react'
import styles from './styles'

class Comment extends Component {
    render() {
        return (
            <div>
                <p style={styles.comment.body}>{this.props.currentComment.body}</p><br />
                <span style={styles.comment.span}>{this.props.currentComment.username}</span>
                <span style={styles.comment.span}>|</span>
                <span style={styles.comment.span}>{this.props.currentComment.timestamp}</span>
                <hr />
            </div>
        )
    }
}

export default Comment