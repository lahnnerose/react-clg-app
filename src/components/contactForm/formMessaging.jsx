import classes from "./formMessaging.module.css";

function FormMessaging(props) {
const { isError, content } = props;
console.log(isError)

return (
    <div className={
        isError === true? classes.error : classes.success
    }>
        {content}
    </div>
    )
}

export default FormMessaging