import {useState, useEffect} from 'react';
import {Button, Card, Stack, IconButton, InputLabel} from '@mui/material';
import {FileUpload, FilePresent} from '@mui/icons-material';
import getURL from '../constants/getURL';

const FileDisplay = ({
  file
}) => {

  return(
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <FilePresent 
        color="primary"
        sx={{fontSize:200}}
      />
      <Stack 
        direction="Row"
      >

      </Stack>
    </Stack>
  );
};

const UploadOptions = ({
  onOptionsUpload,
  runBenchmark
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
        alignItems="center"
        justifyContent="center"
        sx={{
          height: 200,
          textAlign: "center"
        }}
      > 
        {/* <FileDisplay/> */}
        {selectedFile ? 
          <FileDisplay file={selectedFile}/>
          :
          <InputLabel 
            variant="body1" 
            sx={{
              paddingTop: 10
            }}
          >
            File Not Uploaded
          </InputLabel>
        }
      </Card>
      {selectedFile ? 
        <Button variant="contained" onClick=>Run Benchmark</Button>
        :
        <Button disabled variant="contained">Run Benchmark</Button>
      }
    </Stack>
  )
};

export default UploadOptions;
