export default function message(){
    function handleClick(){
        console.log("hi aby")
    }
    return <div>
        <button onClick={handleClick}>Click me</button>
    </div>
}