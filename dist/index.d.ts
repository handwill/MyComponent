/**
 * @class ExampleComponent
 */
import * as React from 'react';
export interface IProps {
    text: string;
}
export default class ExampleComponent extends React.Component<IProps> {
    render(): JSX.Element;
}
