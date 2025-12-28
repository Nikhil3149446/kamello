import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, FormHelperText, TextField } from '@mui/material';
import { createKamelloTicket } from '../../../service/kamello-ticket-creation-service';
export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 430,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius:2,
    boxShadow: 24,
    maxHeight:500,
    display:'flex',
    flexDirection:'column',
    p: 4,
  };
export function SimpleDialog(props: SimpleDialogProps) {
const [age, setAge] = React.useState('');
  const { onClose, open } = props;

  const handleClose = () => {
    onClose("");
  };

  const handleKamelloTicketCreationSubmit =async (event) =>{
    event.preventDefault();
    const requestObject = {
        ticketNumber: event.target['kamello-number'].value,
        ticketHeader: event.target['kamello-header'].value,
        kamelloTicketProgress: event.target['kamello-progress'].value,
        epic: event.target['kamello-epic'].value,
        kamelloPoints: 5,
        // kamelloPoints: event.target['kamello-points'].value,
        // kamelloTicketStatus: event.target['kamello-status'].value,
        kamelloTicketStatus: true,
        userId: event.target['user-id'].value,
        kamelloTicketDescription: event.target['description'].value,
      };
    // const requestObject={
    //     "ticketNumber": "KT123",
    //     "ticketHeader": "Login issue",
    //     "kamelloTicketProgress": "OPEN",
    //     "epic": "AUTHENTICATION",
    //     "kamelloPoints": 5,
    //     "kamelloTicketStatus": true,
    //     "userId": "U1001",
    //     "kamelloTicketDescription": "User is unable to login"
    //   }
      const result=await createKamelloTicket([requestObject]);
      console.log(result)
      handleClose()
      console.log("Submit handleKamelloTicketCreationSubmit",requestObject);
  }

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <form onSubmit={(event)=>handleKamelloTicketCreationSubmit(event)}>
    <Box sx={style}>
    <Box sx={{ flex: 1, overflowY: 'auto', p: 2,flexDirection:'column' }}>
    <Typography
    // variant="caption"
    sx={{
      display: 'block',
      mb: 0.5,
      ml:1,
      fontWeight:'bold',
      color: 'black',
    }}
  >
    Enter the Kamello Number
  </Typography>
    <TextField
          id="outlined-multiline-flexible"
          label="Kamello Number"
          multiline
          size="small"
          name="kamello-number"
          sx={{m:1,width:300}}
          
        />
        <Typography
    // variant="caption"
    sx={{
      display: 'block',
      mb: 0.5,
      ml:1,
      fontWeight:'bold',
      color: 'black',
    }}
  >
    Enter the Kamello Header
  </Typography>
    <TextField
          id="outlined-multiline-flexible"
          label="Kamello Header"
          multiline
          size="small"
          name="kamello-header"
          sx={{m:1,width:300}}
          
        />
    <Typography
    // variant="caption"
    sx={{
      display: 'block',
      mb: 0.5,
      ml:1,
      fontWeight:'bold',
      color: 'black',
    }}
  >
    Enter the Kamello Progress
  </Typography>
    <FormControl sx={{ m: 1, width:300}} size="small" variant='outlined'>
      <InputLabel id="ticket-number-label" >Kamello Progress</InputLabel>
      <Select
        labelId="ticket-number-label"
        id="demo-select-small"
        value={age}
        label="Kamello Progress"
        name="kamello-progress"
        onChange={handleChange}
      >
        <MenuItem value=""> 
          <em>None</em>
        </MenuItem>
        <MenuItem value={'To Do'}>To Do</MenuItem>
        <MenuItem value={'In Progress'}>In Progress</MenuItem>  
        <MenuItem value={'Testing'}>Testing</MenuItem>
        <MenuItem value={'Done'}>Done</MenuItem>
      </Select>

    </FormControl>
    <Typography
    // variant="caption"
    sx={{
      display: 'block',
      mb: 0.5,
      ml:1,
      fontWeight:'bold',
      color: 'black',
    }}
  >
    Enter the Kamello Epic
  </Typography>
    <FormControl sx={{ m: 1, width:300}} size="small" variant='outlined'>
      <InputLabel id="ticket-number-label" >Kamello Epic</InputLabel>
      <Select
        labelId="ticket-number-label"
        id="demo-select-small"
        value={age}
        label="Kamello Epic"
        name="kamello-epic"
        onChange={handleChange}
      >
        <MenuItem value=""> 
          <em>None</em>
        </MenuItem>
        <MenuItem value={'KT-Epic1'}>KT-Epic1</MenuItem>
        <MenuItem value={'KT-Epic2'}>KT-Epic2</MenuItem>  
        <MenuItem value={'KT-Epic3'}>KT-Epic3</MenuItem>
      </Select>

    </FormControl>
    <Typography
    // variant="caption"
    sx={{
      display: 'block',
      mb: 0.5,
      ml:1,
      fontWeight:'bold',
      color: 'black',
    }}
  >
    Enter the Kamello Points
  </Typography>
    <FormControl sx={{ m: 1, width:300}} size="small" variant='outlined'>
      <InputLabel id="ticket-number-label" >Kamello Points</InputLabel>
      <Select
        labelId="ticket-number-label"
        id="demo-select-small"
        value={age}
        name="kamello-points"
        label="Kamello Points"
        onChange={handleChange}
      >
        <MenuItem value=""> 
          <em>None</em>
        </MenuItem>
        <MenuItem value={2}>Two</MenuItem>
        <MenuItem value={3}>Three</MenuItem>  
        <MenuItem value={5}>Five</MenuItem>
      </Select>

    </FormControl>

    <Typography
    // variant="caption"
    sx={{
      display: 'block',
      mb: 0.5,
      ml:1,
      fontWeight:'bold',
      color: 'black',
    }}
  >
    Enter the Kamello Status
  </Typography>
    <FormControl sx={{ m: 1, width:300}} size="small" variant='outlined'>
      <InputLabel id="ticket-number-label" >Kamello Status</InputLabel>
      <Select
        labelId="ticket-number-label"
        id="demo-select-small"
        value={age}
        label="Kamello Status"
        name="kamello-status"
        onChange={handleChange}
      >
        <MenuItem value=""> 
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>  
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>

    </FormControl>
    <Typography
    // variant="caption"
    sx={{
      display: 'block',
      mb: 0.5,
      ml:1,
      fontWeight:'bold',
      color: 'black',
    }}
  >
    Enter the User Id
  </Typography>
    <TextField
          id="outlined-multiline-flexible"
          label="User Id"
          multiline
          size="small"
          name="user-id"
          sx={{m:1,width:300}}
          
        />
        <Typography
    // variant="caption"
    sx={{
      display: 'block',
      mb: 0.5,
      ml:1,
      fontWeight:'bold',
      color: 'black',
    }}
  >
    Enter the Kamello Description
  </Typography>
    <TextField
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          size="small"
          name="description"
          sx={{m:1,width:300}}
          
        />
      
   
    </Box>
    <Box
          sx={{
            display: 'flex',
            height:30,
            justifyContent: 'space-between',
            // borderTop: '1px solid #ccc',
            backgroundColor:'white',
            // position:'fixed',
            p: 1,
          }}
        >
          <button onClick={handleClose} className='mt-[6px] font-semibold bg-red-400 h-fit p-[3px] pl-2 pr-2 rounded'>
            Cancel
          </button>
          <button type='submit' className='mt-[6px] font-semibold bg-blue-600 h-fit p-[3px] pl-2 pr-2 rounded'>
            Create
          </button>
        </Box>
        </Box>
        </form>
  </Modal>
  );
}

