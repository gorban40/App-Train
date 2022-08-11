import './employers-list-item.css';

const EmployersListItem = (props) =>{
    
        const {name,surname,salary,onDelete,onToggleProp,increase,rise,onChangeInput} = props;
        let classNames ="list-group-item d-flex justify-content-between";
        if(increase) {
            classNames += ' increase';
        }
        if(rise) {
            classNames += ' like';
        }
        return (
            <li className={classNames}>
                <span onClick={onToggleProp}
                    className="list-group-item-label" 
                    data-toggle="rise">{name} {surname}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + " $"}
                onChange={onChangeInput}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp}
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                        className="btn-trash btn-sm ">
                        <i className="fas fa-trash"
                        onClick={onDelete}></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
}

export default EmployersListItem;