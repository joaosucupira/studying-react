
function Button(){

    const styles = {
        backgroundColor: "hsl(200,100%,50%)",
        cursor: "pointer",
        border: "none",
        borderRadius: "5px",
        padding:"10px 20px",
        margin:"10px",
    }
    return(
        <button style={styles}>Click me</button>
    );
}
export default Button