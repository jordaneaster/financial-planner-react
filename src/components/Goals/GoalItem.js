
import Card from '../UI/Card';
import ExpenseDate from '../Expenses/ExpenseDate';


 function GoalItem(props) {
    return (
        <Card className='goal-item'>
            <ExpenseDate date={props.date}/>
            <div className='goal-item__description'>
                <h2>{props.title}</h2>
            </div>
            <div className='goal-item__howReach'>
                <h3>{props.howReach}</h3>
            </div>
           
        </Card>
    )
}
export default GoalItem;