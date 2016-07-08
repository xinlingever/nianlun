import React from 'react';

require('./addFiles.less');

let AddFiles = React.createClass({
  onFilesSelected: function (files) {
    alert(JSON.stringify(files.target.files));
    this.props.files = files.target.files;
  },

  render: function() {
    this.props.files = this.props.files || [{name:'aaaaaaaaaaaaaa'}];
    var files = this.props.files.map(function(fileObj) {
        return (
            <div>
            {fileObj.name}
            </div>
        );
    });
    
    return(
    <div className='addFiles-div'>
        <span className='btn btn-success fileinput-button'>
            <i className='glyphicon glyphicon-plus'></i>
            <span>Add files...</span>
            <input type='file' multiple accept='image/*' onChange={this.onFilesSelected}></input>
        </span>
        {files}
    </div>);
  }
});

export default AddFiles;

