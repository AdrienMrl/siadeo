import { Modal, ModalBody, ModalHeader } from 'baseui/modal';
import React, { useState } from 'react';

import { Button } from 'baseui/button';
import { FileUploader } from 'baseui/file-uploader';
import { Input } from 'baseui/input';
import Spacer from './Spacer';
import { Textarea } from 'baseui/textarea';
import { pushItemToField } from '../services/skydb-service';
import { uploadFile } from '../services/skynet-service';

interface UploadVideoModalProps {
  onClose: () => void;
  isOpen: boolean;
}
const UploadVideoModal = ({ onClose, isOpen }: UploadVideoModalProps) => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [file, setFile] = useState<File>();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalHeader>Upload a video</ModalHeader>
      <ModalBody>
        <p>Video must be mp4 or some other formats...</p>
        <br />
        <Input
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <Spacer height={20} />
        <Textarea
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <Spacer height={20} />
        <FileUploader
          onDropAccepted={async (files) => {
            setFile(files[0]);
          }}
        />
        <Spacer height={20} />
        <Button
          onClick={async () => {
            setIsLoading(true);
            const url = await uploadFile(file);
            await pushItemToField('user', ['uploads'], {
              url,
              description,
              title,
            });
            setIsLoading(false);
            onClose();
          }}
          isLoading={isLoading}
        >
          Upload
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default UploadVideoModal;
