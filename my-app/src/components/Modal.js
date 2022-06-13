import React from "react";

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleFieldChange = (e) => {
        let target = e.target;
        this.setState(() => {
          return {value: target.value}
        });
    };

    handleSubmit(e) {
       e.preventDefault();
       this.props.onSave(this.state.value);
          this.setState({
            value: '',
        });
    }

    render() {
        return (
            <>
                {this.props.show && (
                    <form onSubmit={this.handleSubmit} className=" modal flex justify-between min-w-max p-3 gap-2  bg-slate-100 absolute top-0 right-0 z-10">
                        <input 
                        value = {this.state.value}
                        onChange = {this.handleFieldChange}
                        type="text"
                        className="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        placeholder="Value"
                        />
                        <button  type="submit" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">SAVE</button>
                    </form>
                )}
            </>
        )
    }
}
