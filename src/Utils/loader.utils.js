import React, { Component } from 'react';

export class LoaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

    startLoader() {
        this.setState({ isVisible: true });
    }

    endLoader() {
        this.setState({ isVisible: false });
    }

    render() {
        const { isVisible } = this.state;
        return (
            <span>
                {
                    isVisible ?
                        <div className='global-loader'>
                            {/* Loading ... */}

                            {/* <!-- Loader 4 --> */}

                            <div class="loader-line"></div>
                        </div>
                        :
                        null
                }
            </span>
        )
    }
}

export class LoaderUtils {
    _currentGlobalLoader = null;
    static RegisterLoader(ref) {
        this._currentGlobalLoader = ref;
    }
    static startLoader() {
        if (this._currentGlobalLoader && this._currentGlobalLoader.startLoader) {
            this._currentGlobalLoader.startLoader();
        }
    }

    static endLoader() {
        if (this._currentGlobalLoader) {
            this._currentGlobalLoader.endLoader();
        }
    }
}