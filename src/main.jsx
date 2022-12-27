import { createRoot } from 'react-dom/client';
import './index.css';

const app = (
	<div className='contenedor'>
		<div className='logo'>
			<img src='/public/images/logo.png' alt='' />
		</div>
		<div className='datos'>
			<div className='datos-label'>
				<label htmlFor='' className=''>
					Paciente:
				</label>
				<input type='text' name='' id='' />
			</div>
			<div className='datos-label'>
				<label htmlFor='' className=''>
					Medico:
				</label>
				<input type='text' name='' id='' />
			</div>
			<div className='datos-label'>
				<label htmlFor='' className=''>
					Orden:
				</label>
				<input type='text' name='' id='' />
			</div>
			<div className='datos-label'>
				<label htmlFor='' className=''>
					DNI:
				</label>
				<input type='text' name='' id='' />
			</div>
		</div>
	</div>
);
const container = document.getElementById('root');

createRoot(container).render(app);
