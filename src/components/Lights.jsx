import { Button } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Lights() {
	const { mode, setMode } = useColorScheme();
	const isDark = (mode === 'dark');
	const lightSwitch = () => setMode(
		isDark
			? 'light'
			: 'dark'
	);

	return (!mode)
		? null
		: (
			<Button
				variant="outlined"
				onClick={lightSwitch}
				startIcon={
					isDark
						? <DarkModeIcon />
						: <LightModeIcon />
				}
			>
				{isDark
			  	? 'moonlight'
					: 'sunlight'}
			</Button>
		);
}
