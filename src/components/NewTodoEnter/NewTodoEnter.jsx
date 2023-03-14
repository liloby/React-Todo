import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Container,
  Box,
  TextField,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function NewTodoEnter({ setTodos, todos }) {
    // initial set up for adding new task
  const emptyTask = {
    name: "",
    difficulty: 1,
    date: Date.now(),
    completed: false,
  };
  // state for new task
  const [task, setTask] = useState(emptyTask);

  // handling adding a new task
  const handleAddTask = () => {
    if (!task.name) return;
    setTodos([...todos, { ...task, id: uuidv4().slice(-7) }]);
    setTask(emptyTask);
  };

  return (
    <Container
      sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
    >
      <Box sx={{ margin: '0 .5rem'}}>
        <TextField
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          type="text"
          className="name"
          label="Enter a task"
        />
      </Box>
      <Box sx={{margin: '0 .5rem'}}>
        <FormControl>
          <InputLabel id="difficulty-label">Difficulty</InputLabel>
          <Select
            labelId="difficulty-label"
            label="Difficulty"
            value={task.difficulty}
            onChange={(e) =>
              setTask({ ...task, difficulty: parseInt(e.target.value) })
            }
          >
            <MenuItem value="1">1 - Easy</MenuItem>
            <MenuItem value="2">2 - Moderate</MenuItem>
            <MenuItem value="3">3 - Challenging</MenuItem>
            <MenuItem value="4">4 - Difficult</MenuItem>
            <MenuItem value="5">5 - Very Difficult</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{margin: '.5rem'}}>
        <Button variant='contained' size="medium" onClick={handleAddTask} >
          Add Task 
            <AddIcon sx={{fontSize: '1.2rem' ,marginLeft: '.1rem'}}/>
        </Button>
      </Box>
    </Container>
  );
}
