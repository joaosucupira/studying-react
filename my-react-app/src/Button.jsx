
function Button(){

    const styles = {
        fontSize: "4em",
        backgroundColor: "hsl(400,100%,50%)",
        cursor: "pointer",
        border: "none",
        borderRadius: "5px",
        padding:"20px 20px",
        margin:"10px",
    }
    let count = 0;

    const handleClick = (name) => {
        if(count < 3){

            count++;
            console.log(`${name} you clicked me ${count} time/s.`);

        } else {
            console.log(`${name} STOP CLINKING ME!`);
        }
    }

    return(
        <button onClick={() => handleClick("Joao")} style={styles}>Click me</button>
    );
}
export default Button