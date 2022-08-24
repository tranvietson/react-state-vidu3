import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThai: 0
        }
        
    }
    thongbao = () =>{ 
        alert('Cach xu ly tuong tac trong react js');
    }
    thongbao2 = (x) =>{
        alert(x);
    }
    renderButton = () => {
        return (
        <div className="row">
            <div className="btn btn-group">
              <div className="btn btn-info" onClick={() => this.editClick()}>Edit</div>
              <div className="btn btn-warning" onClick = {()=>{this.thongbao2('ha ha')}}>Remove</div>
             </div>
        </div>
               )
     }

    renderForm = () => {
        return (
        
                 <div className="row">
                      <div className='form-group'>
                          <input defaultValue={this.props.tieude} type="text" name className="form-control" placeholder='typing text in here!!!'/>
                          <hr/>
                    </div>
                      <div className="btn btn-block btn-danger" onClick={() => this.saveClick()}>Save</div>
                 </div>

               
                


               )
          }
    displayCheck = () => {
        if(this.state.trangThai === 0) {
            return this.renderButton();
        } else {
            return this.renderForm();
                }
    }
    editClick = () => {
        this.setState({trangThai:1});
    }
    saveClick = () => {
        this.setState({trangThai: 0});
    }
    
    render() {
        return (
            <section id="scroll">
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center">
                        <div className={"col-lg-6 order-lg-"+ this.props.vitrianh } >
                            <div className="p-5">
                            <img
                                className="img-fluid rounded-circle"
                                src={this.props.linkanh}
                                alt="..."
                            />
                            </div>
                        </div>
                        <div className= {"col-lg-6 order-lg-"+ this.props.vitritrichdan } >
                            <div className="p-5">
                            <h2 className="display-4">{this.props.tieude}</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam
                                exercitationem, ea animi blanditiis recusandae! Ratione voluptatum
                                molestiae adipisci, beatae obcaecati.
                            </p>
                            {this.displayCheck() }
                           </div>
                        </div>
                        </div>
                        <hr/>
                    </div>
                    
             </section>

        );
    }
}

export default Content;