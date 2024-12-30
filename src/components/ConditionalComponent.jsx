import Code from './Code';
import Welcome from './Welcome';

export default function ConditionalComponent(){
    const display = false;
    // if(display)
    // {
    //     return <Welcome></Welcome>
    // }else{
    //     return <Code></Code>
    // }

    // use ternary operators
    return display ? <Welcome /> : <Code />
}