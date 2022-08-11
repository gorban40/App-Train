import EmployersListItem from '../employers-list-item/employers-list-item';
import './employers-list.css';

const EmployersList = ({data, onDelete,onToggleProp,onChangeInput}) => {

    const elements = data.map(item => {
        const {id,salary, ...itemProps} = item;
        return (
            <EmployersListItem 
            key={id}
            salary={salary}  
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            onChangeInput={(e) => onChangeInput( id, 'salary', e.target.value)}
            onCHangeValue={() => this.onUpdateValue(salary)}/>
        );
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployersList;