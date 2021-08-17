import React from 'react';

class VacImage extends React.Component {
  render () {
    return <img src={this.props.path} className='vac-img'></img>; //สร้างมาไว้เรียกใช้รูปผ่าคลาส vac-img
  }
}

export default VacImage;