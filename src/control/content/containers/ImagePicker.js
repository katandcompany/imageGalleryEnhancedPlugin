import React, { Component } from 'react';
import { Image, SortableList } from '../components';

export default class ImagePicker extends Component {
  fid = 'folder-imgs';

  componentWillUnmount = () => {
    const frameExists = document.lazyLoadInstances && document.lazyLoadInstances[this.fid];
    if (frameExists) {
      document.lazyLoadInstances[this.fid] = null;
      delete document.lazyLoadInstances[this.fid];
    }
  };

  render() {
    const { images, galleryImages, toggleImagesModal, handleAddImages, selectImage } = this.props;
    return (
      <div>
        <SortableList fid={this.fid} group="grid" noSort>
          {galleryImages.map(({ id, src, selected }) => {
            if (!images.find(img => img.id === id)) {
              return (
                <Image
                  key={id}
                  id={id}
                  src={src}
                  fid={this.fid}
                  selected={selected}
                  onClick={selectImage}
                />
              );
            }
            return null;
          })}
        </SortableList>
        <div className="modal__footer">
          <a className="btn btn-default btn-outlined" onClick={toggleImagesModal} style={{border: '1px solid rgb(221, 221, 221)', marginRight: '10px'}}>Cancel</a>
          <a className="btn btn-success" onClick={() => {
            handleAddImages();
            toggleImagesModal();
          }}>Add</a>
        </div>
      </div>
    );
  }
}
