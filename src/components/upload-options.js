import {useState, useEffect} from 'react';
import {Card, Stack, IconButton, InputLabel} from '@mui/material';
import {FileUpload, FilePresent} from '@mui/icons-material';
import getURL from '../constants/getURL';
import moment from 'moment';

const FileDisplay = ({
  file
}) => {
  console.log(file);

  return(
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <FilePresent 
        color="primary"
        sx={{fontSize:200}}
      />
      <Stack
        alignItems="start"
        justifyContent="start"
      > 
        <InputLabel sx={{marginBottom:1}}>
          File Name: {file.name}
        </InputLabel>
        <InputLabel sx={{marginBottom:1}}>
          Last Modified Date: {moment(file.lastModifiedDate).format('DD/MM/YYYY hh:mm:ss A')}
        </InputLabel>
        <InputLabel>
          Size: {file.size}B
        </InputLabel>
      </Stack>
    </Stack>
  );
};

const UploadOptions = ({
  onOptionsUpload,
}) => {
  const [selectedFile, setSelectedFile] = useState();

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const sendOptionsFile = (formData) => {
    fetch(getURL().UPLOAD_OPTIONS_FILE, {
      method:'POST',
      body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          onOptionsUpload && onOptionsUpload();
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    }

  useEffect(() => {
    console.log(selectedFile && selectedFile.name);
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      sendOptionsFile(formData);
    }
  }, [selectedFile]);

  return (
    <Stack 
      direction="column" 
      spacing={2} 
      sx={{
        marginTop: 2,
      }}
    >
      <Stack 
        direction="row" 
        alignItems="center"
      >
        <InputLabel
          sx={{
            marginLeft: 1.5
          }}  
        >
          Upload Options File
        </InputLabel>
        <IconButton 
          color="primary"
          component="label"
        >
          <input hidden accept=".ini" type="file" onChange={handleFileSelect}/>
          <FileUpload/>
        </IconButton>
      </Stack>
      <Card
        variant="outlined"
        sx={{
          height: 200,
          textAlign: "center"
        }}
      > 
        {selectedFile ? 
          <FileDisplay file={selectedFile}/>
          :
          <InputLabel
            sx={{
              paddingTop: 10
            }}
          >
            File Not Uploaded
          </InputLabel>
        }
      </Card>
    </Stack>
  )
};

export default UploadOptions;
