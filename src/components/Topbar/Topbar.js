import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

import './Topbar.css'


const Topbar = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    navigate('/signin')
  }

  return (
    <div className='topbar'>
      <div className='topbar-title'>
        <p>Quote Estimator app</p>
      </div>
      <div className='signout-div'>
        <Button variant='outlined' color='error' onClick={handleSignOut}>Sign Out</Button>
      </div>
    </div>
  )
}

export default Topbar
