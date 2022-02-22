import React, { Component } from 'react'

export default class Menu extends Component {
    render() {

        const forward = (e) => {
            this.props.chooseVideo(e.target.value)
        }

        return (
            <div>
                <form onClick={forward}>
                    <input type="radio" name="select" value="fast" id="fast" />
                    <label htmlFor="fast">Fast</label>

                    <input type="radio" name="select" value="slow" id="slow" />
                    <label htmlFor="slow">Slow</label>

                    <input type="radio" name="select" value="cute" id="cute" />
                    <label htmlFor="cute">Cute</label>

                    <input type="radio" name="select" value="eek" id="eek" />
                    <label htmlFor="eek">Eek</label>
                </form>
            </div>
        )
    }
}
