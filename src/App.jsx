// IMPs - ExtLib
import {
	Container,
	Stack,
} from '@mui/material';
// IMPs - local
import Lights from './components/Lights';
import Planets from './components/Planets';


export default function App() {
  return (
		<Container>
			<Stack spacing={2}>
				<Stack direction="row" spacing={2} sx={{ justifyContent: 'flex-end' }}>
					<Lights />
				</Stack>
				<Planets />
			</Stack>
		</Container>
	);
}
