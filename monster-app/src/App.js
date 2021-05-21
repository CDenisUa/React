import {Component} from 'react';
import {CardList} from './components/card-list/CardList';

export class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
    }

    render() {
        return (
            <CardList>
                { this.state.monsters.map(monster => <div key={monster.id}>{monster.name}</div>) }
            </CardList>
        )
    }
}

