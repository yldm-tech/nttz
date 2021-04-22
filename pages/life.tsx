import React, { Component } from 'react';
import { NextPageContext } from 'next'

interface Props {
    userAgent?: string;
}

// 生命周期示例，顺便打了下userAgent,重点关注浏览器console和IDE的console内容
export default class extends Component<Props> {
    static async getInitialProps({req}: NextPageContext) {   //s1
        console.log('getInitialProps');
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
        return {userAgent};
    }

    constructor(props: Props) { //s2   //c1
        super(props);
        console.log('constructor');
    }

    UNSAFE_componentWillMount() { //s3   //c2
        console.log('UNSAFE_componentWillMount');
    }

    render() {  //s4    //c3
        console.log('render');
        return (
            <div>
                Hello World {this.props.userAgent}
            </div>
        );
    }

    componentDidMount() {  //c4
        console.log('componentDidMount');
    }

}