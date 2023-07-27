import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

const UploadToYandexDisk = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDrop = async (acceptedFiles) => {
    if (acceptedFiles.length > 100) {
      alert('Максимальное количество файлов - 100');
      return;
    }

    const formData = new FormData();
    acceptedFiles.forEach((file) => {
      formData.append('files', file);
    });
    // const response = await axios.post('https://cloud-api.yandex.net/v1/disk/resources/upload', formData, {

    try {
      const response = await axios.post('https://cloud-api.yandex.net/v1/disk/resources/upload', formData, {
        headers: {
          'Authorization': 'y0_AgAAAAAwyQMKAAo_-QAAAADozrdCfQaWNv0DSZ-SDy7O8YUDGBnxQOc',
        },
      });

      setUploadedFiles((prevUploadedFiles) => [...prevUploadedFiles, ...acceptedFiles]);
    } catch (error) {
      console.error('Ошибка загрузки файлов на Яндекс.Диск', error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: '*/*', multiple: true });

  return (
    <>
      <div {...getRootProps()} style={{ border: '2px dashed #aaa', padding: '20px', textAlign: 'center' , width: '500px' } }>
        <input {...getInputProps()} />
        <p>Перетащите файлы сюда или кликните, чтобы выбрать файлы для загрузки.</p>
        <p>Максимальное количество файлов - 100.</p>
      </div>
      {uploadedFiles.length > 0 && (
        <div>
          <h2>Загруженные файлы:</h2>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default UploadToYandexDisk;
