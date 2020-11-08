import React from 'react';
import { Upload } from '../models/User';

const portal = 'https://siasky.net/';

const VideoPreview = (upload: Upload) => (
  <div>
    <a href={portal + upload.url.replace('sia:', '')}>{upload.title}</a>
  </div>
);

export default VideoPreview;
