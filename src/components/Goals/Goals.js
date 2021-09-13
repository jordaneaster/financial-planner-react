import Card from '../UI/Card';
import GoalItem from './GoalItem';
import './goals.css';

 function Goals(props) {
    return (
        <Card className='goals'>
            <GoalItem
                title={props.goals[0].title}
                howReach={props.goals[0].howReach}
                date={props.goals[0].date}/>
            <GoalItem
                title={props.goals[1].title}
                howReach={props.goals[1].howReach}
                date={props.goals[1].date}/>
            <GoalItem
                title={props.goals[2].title}
                howReach={props.goals[2].howReach}
                date={props.goals[2].date}/>
        </Card>
    )
}
export default Goals;