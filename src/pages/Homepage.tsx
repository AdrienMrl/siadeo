import React, { useEffect, useState } from 'react';

import { Spinner } from 'baseui/spinner';
import UploadVideoModal from '../components/UploadVideoModal';
import { UserModel } from '../models/User';
import VideoPreview from '../components/VideoPreview';
import { getAtPath } from '../services/skydb-service';

const Homepage = () => {
  const [openUploadModal, setOpenUploadModal] = useState(false);
  const [user, setUser] = useState<UserModel>();

  useEffect(() => {
    getAtPath('user').then(setUser);
  }, []);

  return (
    <p style={{ margin: '100px' }}>
      <UploadVideoModal
        isOpen={openUploadModal}
        onClose={setOpenUploadModal.bind(null, false)}
      />
      <h2>VideoWhale</h2>
      <br />
      <br />
      <h3>Subscriptions:</h3>
      {!user ? (
        <Spinner />
      ) : (
        user?.uploads.map((upload) => (
          <VideoPreview {...upload} key={upload.url} />
        ))
      )}
      <br />
      <br />
      <button onClick={() => setOpenUploadModal(true)}>Upload a video</button>
    </p>
  );
};

export default Homepage;
