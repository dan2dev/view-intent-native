/// <reference types="@types/react" />
import { View } from "./main";
import { IViewInfo } from "./types";
export declare class ViewNotFound extends View<ViewNotFound.IProps, ViewNotFound.IState> {
    viewInfo: IViewInfo;
    state: ViewNotFound.IState;
    constructor(props: ViewNotFound.IProps);
    render(): JSX.Element;
}
export declare namespace ViewNotFound {
    const viewInfo: IViewInfo;
    interface IProps extends View.IProps {
    }
    interface IState extends View.IState {
    }
}
