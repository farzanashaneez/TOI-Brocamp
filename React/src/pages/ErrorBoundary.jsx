import { Component } from "react";

class ErrorBoundary extends Component{
constructor(props){
    super(props);
    this.state={hasError:false}
}
static getDerivedStateFromError(error){
    return { hasError: true };
}
componentDidCatch(err,errorInfo){
console.log('error caught in errorboundary')
}
render(){
    if(this.state.hasError)
    return <><h1>Something went wrong</h1></>
    else{
        return this.props.children
    }
}
}
export default ErrorBoundary;