import { IProcessedStyleSet, IStyle, mergeStyleSets } from "@fluentui/react";

interface IHomStyle {
    todoContainer : IStyle;
    headerStyle: IStyle;
    pivotRoot: IStyle;
}

const HomeStyle : IProcessedStyleSet<IHomStyle> = mergeStyleSets({
    todoContainer : {
        width: '50%',
        height: '80%',

        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
    },
    headerStyle : {
        height: 100,
        background: "green",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
    pivotRoot : {
        display: 'flex',
        justifyContent: 'center'
    }
})

export default HomeStyle