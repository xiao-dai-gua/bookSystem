import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

export class Redirect_1 extends Component {
    render() {
        return (
            <div>
                //todo 路由重定位
                <Redirect to='/Main'></Redirect>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Redirect_1)
