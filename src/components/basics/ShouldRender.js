
export function ShouldRender(props) {
    return props.if ? (
        props.children
    ) : null;
}


export function ShouldDisplay(state) {
    return state.if ? (
        state.children
    ) : null;
}