import styles from '../components/ToDoListItem.module.css'
export default function TodoListItem({
    text,
    isCompleted,
    onButtonClick,
    _id
}) {

    return (
        <>
            <div className={styles.task && isCompleted ? `${styles.complete} ` : `${styles.incomplete}`} >
                <div>{text}</div>
                <div>{isCompleted ? 'Complete' : 'Incomplete'}</div>
                <button className={styles.button} onClick={() => onButtonClick(_id) }>Change Status</button>
            </div >
        </>
    )
}