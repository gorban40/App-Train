import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component {
    render() {
        const buttonsData = [
            { name: 'all', label: 'Все сотруднки' },
            { name: 'rise', label: 'На повышение' },
            { name: 'moreThen1000', label: 'З/П больше 1000грн' }
        ];
        const buttons = buttonsData.map(({ name, label }) => {
            const active = this.props.filter === name;
            const clazz = active ? 'btn-light' : 'btn-outline-light';
            return (
                <button className={`btn ${clazz}`}
                    type="button"
                    key={name}
                    onClick={() => this.props.onUpdateFilter(name)}>
                    {label}
                </button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
{/*                 <button className="btn btn-light"
                    type="button">
                    Все сотрудники
                </button>
                <button className="btn btn-outline-light"
                    type="button">
                    На повышение
                </button>
                <button className="btn btn-outline-light"
                    type="button">
                    З/П больше 1000грн
                </button> */}
            </div>
        );
    }
}

export default AppFilter;