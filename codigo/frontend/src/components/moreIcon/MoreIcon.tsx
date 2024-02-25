import { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import UpdateModal from '../updateModal/UpdateModal';
import axios from 'axios';

export default function MoreIcon({ musicId }: { musicId: string }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [updateModalOpen, setUpdateModalOpen] = useState(false); 
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleUpdate = () => {
        handleClose();
        setUpdateModalOpen(true); 
    };

    const handleDelete = () => {
        handleClose();
        deleteMusic(musicId);
    };

    const deleteMusic = async (id: string) => {
        try {
            await axios.delete(`http://localhost:8080/music/${id}`);
            console.log('Música deletada com sucesso');
        } catch (error) {
            console.error('Erro ao deletar a música:', error);
        }
    };

    return (
        <div>
            <IconButton onClick={handleClick} style={{ color: 'white' }}>
                <MoreHorizIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleUpdate}>Update</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
            <UpdateModal
                open={updateModalOpen}
                handleClose={() => setUpdateModalOpen(false)}
                musicId={musicId} 
            />
        </div>
    );
}
